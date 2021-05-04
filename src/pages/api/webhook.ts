/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { inspect } from 'util';
import { request } from '@octokit/request';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';
import type { Response } from 'node-fetch';
import { URL } from 'url';
import cors from 'cors';
import {
  authMiddleware,
  corsMiddleware,
  getOrigin,
  isValidURL,
} from '../../lib/middleware';

let auth = authMiddleware();
let whitelist = [process.env.SITE_URL, process.env.ADMIN_URL];
// Initialize the cors middleware
const initCors = corsMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['POST', 'OPTIONS'],
    origin(origin, callback) {
      if (
        process.env.NODE_ENV === 'development' ||
        whitelist.indexOf(origin) !== -1
      ) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

type UnwrappedPromiseType<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : any;

async function getImageAsBuffer(imageUrl: string): Promise<string> {
  // @ts-ignore
  let result: Response = await fetch(imageUrl);
  let data = await result.buffer();
  return data.toString('base64');
}

let requestWithAuth = request.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});

async function getLastCommitSha() {
  let result = await requestWithAuth(
    'GET /repos/{owner}/{repo}/git/matching-refs/{ref}',
    {
      owner: process.env.GITHUB_USERNAME!,
      repo: process.env.GITHUB_REPO!,
      ref: process.env.GITHUB_REF!,
    }
  );

  return result.data.length ? result.data[0].object.sha : '';
}

async function createCommit(
  fileName: string,
  data: UnwrappedPromiseType<typeof createBlob>,
  lastCommitSha: string
) {
  let tree = await requestWithAuth('POST /repos/{owner}/{repo}/git/trees', {
    owner: process.env.GITHUB_USERNAME!,
    repo: process.env.GITHUB_REPO!,
    tree: [
      {
        path: `public/${fileName}`,
        mode: '100644',
        type: 'blob',
        sha: data.sha,
      },
    ],
    base_tree: lastCommitSha,
  });
  let result = await requestWithAuth('POST /repos/{owner}/{repo}/git/commits', {
    owner: process.env.GITHUB_USERNAME!,
    repo: process.env.GITHUB_REPO!,
    message: `add new image ${fileName}`,
    tree: tree.data.sha,
    parents: [lastCommitSha],
  });

  return result.data;
}

async function createBlob(
  base64Image: string
): Promise<{ sha: string; url: string }> {
  const result = await requestWithAuth('POST /repos/{owner}/{repo}/git/blobs', {
    owner: process.env.GITHUB_USERNAME!,
    repo: process.env.GITHUB_REPO!,
    content: base64Image,
    encoding: 'base64',
  });

  return result.data;
}

async function pushCommit(data: UnwrappedPromiseType<typeof createCommit>) {
  let result = await requestWithAuth(
    'PATCH /repos/{owner}/{repo}/git/refs/{ref}',
    {
      owner: process.env.GITHUB_USERNAME!,
      repo: process.env.GITHUB_REPO!,
      ref: process.env.GITHUB_REF!,
      sha: data.sha,
      // force: false,
    }
  );

  return result.data;
}

export default async (req: Req, res: Res) => {
  let message = '';
  try {
    await auth(req);
    await initCors(req, res);
    if (req.method === 'POST') {
      // Process a POST request
      if (req.body.post?.post_status === 'publish') {
        let postThumbnail = req.body.post_thumbnail; // string or false
        if (
          isValidURL(postThumbnail) &&
          whitelist.indexOf(getOrigin(postThumbnail)) !== -1
        ) {
          let fileName = new URL(postThumbnail).pathname.slice(28);
          let base64Image = await getImageAsBuffer(postThumbnail);
          let blobData = await createBlob(base64Image);
          let lastCommit = await getLastCommitSha();
          let commit = await createCommit(fileName, blobData, lastCommit);
          let result = await pushCommit(commit);
          // eslint-disable-next-line no-console
          console.log(inspect(result, true, 8));
        }
      }
      message = 'success';
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    message = error.message;
  }
  res.status(200).json({ message });
};

// Helper method to wait for a middleware to execute before continuing
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';
import type cors from 'cors';
import { URL } from 'url';

export function isValidURL(targetUrl: string) {
  try {
    let url = new URL(targetUrl);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (error) {
    return false;
  }
}

export function getOrigin(targetUrl: string) {
  try {
    let url = new URL(targetUrl);
    return url.origin;
  } catch (error) {
    return '';
  }
}

// And to throw an error when an error happens in a middleware
export function corsMiddleware(middleware: ReturnType<typeof cors>) {
  return (req: Req, res: Res) =>
    new Promise((resolve, reject) => {
      if (isValidURL(req.headers['x-wp-webhook-source'] as string)) {
        req.headers.origin = getOrigin(
          req.headers['x-wp-webhook-source'] as string
        );
      }
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

export function authMiddleware() {
  return async (req: Req) => {
    console.log(
      '🚀 ~ file: middleware.ts ~ line 56 ~ return ~ req',
      req.headers
    );
    if (
      req.headers['x-api-key'] &&
      req.headers['x-api-key'] === process.env.X_API_KEY
    ) {
      return true;
    }

    throw new Error('Not Authorized!');
  };
}

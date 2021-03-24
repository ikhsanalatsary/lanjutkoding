// Helper method to wait for a middleware to execute before continuing
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';
import type cors from 'cors';
import { URL } from 'url';

export function isValidURL(targetUrl: string) {
  if (!targetUrl) {
    return false;
  }
  let isValid = false;
  try {
    let url = new URL(targetUrl);
    isValid = url.protocol === 'http:' || url.protocol === 'https:';
  } catch (error) {
    isValid = false;
  }

  return isValid;
}

export function getOrigin(targetUrl: string) {
  if (!targetUrl) {
    return '';
  }
  let origin = '';
  try {
    let url = new URL(targetUrl);
    origin = url.origin;
  } catch (error) {
    origin = '';
  }

  return origin;
}

// And to throw an error when an error happens in a middleware
export function initMiddleware(middleware: ReturnType<typeof cors>) {
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

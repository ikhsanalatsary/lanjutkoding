This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, setup environment variable on your local. e.g: `.env.local` with the following:

```
NEXT_PUBLIC_GRAPHQL_URI=http://dash.lanjutkoding.local/graphql
NEXT_PUBLIC_SITE_URL=
SITE_URL=
NEXT_PUBLIC_DEFAULT_GRAVATAR=https://secure.gravatar.com/avatar/72176749cff2f81f6bf56178ec7b2c64?s=96&d=mm&r=g
NEXT_PUBLIC_LOCALE=id-ID
GITHUB_TOKEN=
GITHUB_USERNAME=ikhsanalatsary
GITHUB_REPO=
GITHUB_REF=heads/main
ADMIN_URL=
X_API_KEY=
```

Second, run WordPress:

```
cd cms
```

and see [The readme](cms/README.md)

Third, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### (OLD_UNNECESSARY_CONFIG) Hostname resolution (map hostname to ip address)

Make sure you map dash.lanjutkoding.local to localhost ip address (127.0.0.1),
The location is - for linux or mac in `/etc/hosts` or for Windows in `C:\Windows\System32\drivers\etc\hosts`
Let's add this line in the end of the file:

```
127.0.0.1 dash.lanjutkoding.local
```

So, our WordPress will point to `http://dash.lanjutkoding.local`

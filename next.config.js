module.exports = {
  swcMinify: false,
  images: {
    domains: ['lanjutkoding.local', 'yuk.lanjutkoding.com', 'lanjutkoding.com', 'secure.gravatar.com', '1.gravatar.com', 'images.tokopedia.net'],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/halaman/1',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/halaman/1',
        has: [{ type: 'query', key: 'page', value: '1' }],
        destination: '/',
      },
    ];
  },
};

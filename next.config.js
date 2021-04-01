module.exports = {
  images: {
    domains: [
      'lanjutkoding.local',
      'yuk.lanjutkoding.com',
      'lanjutkoding.com',
      'secure.gravatar.com',
      '1.gravatar.com',
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  future: { webpack5: true },
};

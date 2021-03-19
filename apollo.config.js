module.exports = {
  client: {
    includes: ['pages/**', 'components/**', 'graphql/**'],
    service: {
      name: 'lanjutkoding',
      localSchemaFile: './schema/schema.graphql',
    },
  },
};

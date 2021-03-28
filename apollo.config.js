module.exports = {
  client: {
    includes: ['src/pages/**', 'src/components/**', 'graphql/**'],
    service: {
      name: 'lanjutkoding',
      localSchemaFile: './schema/schema.graphql',
    },
  },
};

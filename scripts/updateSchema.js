/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
if (!process.env.NEXT_PUBLIC_GRAPHQL_URI) {
  require('dotenv').config({
    path: '.env.local',
  });
}

module.exports = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_URI,
  overwrite: true,
  generates: {
    './schema/schema.json': {
      plugins: ['introspection'],
    },
    './schema/schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        commentDescriptions: true,
      },
    },
  },
};

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
    './generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

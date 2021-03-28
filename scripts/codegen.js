module.exports = {
  schema: 'schema/schema.graphql',
  documents: 'graphql/query.graphql',
  overwrite: true,
  generates: {
    './src/lib/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: false,
        withHOC: false,
        withComponent: false,
        withResultType: true,
        reactApolloVersion: 3,
        avoidOptionals: {
          field: true,
          inputValue: true,
          object: true,
          defaultValue: true,
        },
      },
    },
  },
};

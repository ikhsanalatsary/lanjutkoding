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
        // https://www.graphql-code-generator.com/docs/generated-config/typescript#maybevalue
        maybeValue: 'T | null | undefined',
        skipTypename: false,
        withHooks: false,
        withHOC: false,
        withComponent: false,
        withResultType: true,
        reactApolloVersion: 3,
        avoidOptionals: true,
      },
    },
  },
};

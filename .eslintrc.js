module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:react-hooks/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        "tsconfigRootDir": __dirname,
        "project": "./tsconfig.eslint.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "prefer-const": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-props-no-spreading": "off",
        "no-underscore-dangle": "off",
        "arrow-body-style": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "import/prefer-default-export": "off",
        "react/require-default-props": "off",
        "react/no-danger": "off",
    },
    "settings": {
        "react": {
          "pragma": "React",  // Pragma to use, default to "React"
          "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
          "version": "detect",
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            // "forbidExtraProps",
            // {"property": "freeze", "object": "Object"},
            // {"property": "myFavoriteWrapper"}
        ],
        "linkComponents": [
          // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
          "Hyperlink",
          {"name": "Link", "linkAttribute": "href"}
        ]
      }
};

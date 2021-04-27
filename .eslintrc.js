module.exports =  {
    parser:  "@typescript-eslint/parser",  // Specifies the ESLint parser
    extends:  [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended", // uses typescript-specific linting rules
      "plugin:react/recommended", // uses react-specific linting rules
      "prettier/react", // disables react-specific linting rules that conflict with prettier
      "plugin:prettier/recommended", // uses react-specific linting rules
    ],
    plugins: [
      "react",
      "react-native",
      "import", // eslint-plugin-import for custom configure
    ],
    parserOptions:  {
      ecmaVersion:  2020,  // Allows for the parsing of modern ECMAScript features
      sourceType:  "module",  // Allows for the use of imports
      project: "./tsconfig.json",
      tsconfigRootDir: "./",
    },
    rules: {

      // import plugins
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/namespace": "error",
      "import/default": "error",
      "import/export": "error",
      'import/order': [
        'error',
        {
          groups: ["builtin", "external", "parent", "sibling", "index"],
          alphabetize: {
            order: 'asc',
          },
        },
      ],
    },
    settings: {
      "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"]
        },
      "import/resolver": {
        "typescript": {
          "alwaysTryTypes": true
        },
      },
    }
}
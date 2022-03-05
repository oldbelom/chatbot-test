module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react"],
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ["**/dist/**"],
  rules: {
    "max-len": [
      "error",
      {
        ignoreComments: true,
        code: 100,
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

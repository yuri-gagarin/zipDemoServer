//https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  extends: [
    'eslint-config-mfe/eslintrc.es6.js'
  ],
  rules: {
    "arrow-body-style": ["off"],
    "comma-dangle": ["error", "never"],
    "eol-last": ["off"],
    "import/no-extraneous-dependencies": ["warn"],
    "indent": ["error", 2],
    "no-console": ["warn"],
    "no-multiple-empty-lines": ["off"],
    "no-trailing-spaces": ["off"],
    "no-unused-vars": ["off"],
    "object-curly-newline": ["off"],
    "object-shorthand": ["error", "consistent"],
    "padded-blocks": ["off"],
    "prefer-arrow-callback": ["warn"],
    "prefer-destructuring": ["off"],
    "quotes": ["off", "double"]
  },
  parser: "babel-eslint",
  parserOptions: {
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  env: {
    "commonjs": true,
    "node": true,
    "mocha": true
  }
}
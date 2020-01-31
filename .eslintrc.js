//https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  extends: [
    'eslint-config-mfe/eslintrc.es6.js'
  ],
  rules: {
    "comma-dangle": ["error", "never"],
    "eol-last": ["off"],
    "import/no-extraneous-dependencies": ["warn"],
    "indent": ["error", 2],
    "no-console": ["warn"],
    "no-multiple-empty-lines": ["off"],
    "no-unused-vars": ["off"],
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
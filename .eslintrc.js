//https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  extends: [
    'eslint-config-mfe/eslintrc.es6.js'
  ],
  rules: {
    "quotes": ["off", "double"],
    "no-multiple-empty-lines": ["off"],
    "indent": ["error", 2],
    "no-console": ["warn"],
    "eol-last": ["off"],
    "comma-dangle": ["never", "error"]
  }
}
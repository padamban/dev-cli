const base = require('config.eslint/library.eslintrc.js')

module.exports = {
  ...base,
  root: true,
  rules: {
    ...base.rules,
    camelcase: [
      'error',
      {
        allow: ['^__TEST_'],
      },
    ],
  },
}

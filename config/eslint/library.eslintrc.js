const base = require('./base.eslintrc')

module.exports = {
  ...base,
  globals: {
    describe: true,
    test: true,
    expect: true,
    NodeJS: true,
  },
  ignorePatterns: ['dist/*'],
}

const base = require('./base.eslintrc')

module.exports = {
  ...base,
  extends: [...base.extends, 'next', 'plugin:react/recommended'],
  plugins: [...base.plugins, 'react', 'react-hooks'],
  env: {
    browser: true,
    node: true,
  },
  globals: {
    test: true,
    expect: true,
    JSX: true,
    NodeJS: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...base.rules,
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
  },
}

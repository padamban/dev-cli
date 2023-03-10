module.exports = {
  extends: ['turbo', 'prettier', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier', '@typescript-eslint', 'simple-import-sort'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {},
  },
  env: {
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    camelcase: 'error',
    'no-console': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  ignorePatterns: ['node_modules'],
}

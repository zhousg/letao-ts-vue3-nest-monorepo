/* eslint-env node */

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: '@antfu/eslint-config',
  rules: {
    'no-console': [0],
  },
  overrides: [
    {
      files: ['projects/backend/**/*.ts'],
      rules: {
        '@typescript-eslint/consistent-type-imports': 'off',
      },
    },
  ],
}

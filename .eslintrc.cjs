/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 80,
        // trailingComma: 'none',
        endOfLine: 'auto',
      },
    ],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index'],
      },
    ],
  },
}

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     node: true,
//   },
//   extends: [
//     '@antfu',
//     'plugin:prettier/recommended',
//     '@vue/eslint-config-typescript',
//   ],
//   plugins: ['prettier'],
//   rules: {
//     'no-console': [0],
//     '@typescript-eslint/no-unsafe-return': 'off',
//     'antfu/if-newline': 'off',
//     'antfu/generic-spacing': 'off',
//     'prettier/prettier': [
//       'warn',
//       {
//         singleQuote: true,
//         semi: false,
//         printWidth: 80,
//         // trailingComma: 'none',
//         endOfLine: 'auto',
//       },
//     ],
//   },
//   overrides: [
//     {
//       files: ['projects/backend/**/*.ts'],
//       rules: {
//         '@typescript-eslint/consistent-type-imports': 'off',
//       },
//     },
//   ],
// }

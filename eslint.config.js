const globals = require('globals')
const js = require('@eslint/js')
const ts = require('typescript-eslint')
const vue = require('eslint-plugin-vue')
const eslintConfigPrettier = require('eslint-config-prettier')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

module.exports = [
  {
    ignores: ['**/build/**', '**/dist/**', 'eslint.config.js'],
  },

  // prettier
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,

  // javascript + typescript + vue
  ...[
    js.configs.recommended,
    // 自定义配置
    {
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
          ...globals.browser,
        },
      },
      rules: {
        'no-unused-vars': 'warn',
      },
    },
  ].map((conf) => ({
    ...conf,
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
  })),

  // typescript + vue
  ...[
    ...ts.configs.recommended,
    // 自定义配置
    {
      rules: {
        'no-undef': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-expressions': 'off',
      },
    },
  ].map((conf) => ({
    ...conf,
    files: ['**/*.ts', '**/*.vue'],
  })),

  // vue
  ...[
    ...vue.configs['flat/recommended'],
    // 自定义配置
    {
      languageOptions: {
        parserOptions: {
          parser: {
            // Script parser for `<script>`
            js: 'espree',
            // Script parser for `<script lang="ts">`
            ts: '@typescript-eslint/parser',
          },
        },
      },
      rules: {
        'vue/singleline-html-element-content-newline': 'off',
      },
    },
  ].map((conf) => ({
    ...conf,
    files: ['**/*.vue'],
  })),
]

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['standard', 'plugin:vue/vue3-essential', 'plugin:vue/vue3-recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-irregular-whitespace': 'off',
  },
};

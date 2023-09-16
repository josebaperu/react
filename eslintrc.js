module.exports = {
  extends: ['eslint-config-prettier'],
  plugins: ['eslint-plugin-prettier'],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};

module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/imports',
    './rules/react',
    './rules/flow',
    './rules/d3overrides'
  ].map(require.resolve),
  rules: {}
};
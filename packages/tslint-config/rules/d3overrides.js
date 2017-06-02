module.exports = {
  rules: {
    'quotemark': [true, 'single'],
    'member-access': false,
    'trailing-comma': [true, { 'multiline': 'never', 'singleline': 'never' }],
    'ordered-imports': [false],
    'object-literal-sort-keys': false,
    'member-ordering': [false],
    'variable-name': [true,
      'ban-keywords',
      'check-format',
      'allow-pascal-case',
      'allow-leading-underscore'
    ],
    'interface-name': [false],
    'max-line-length': [true, 200],  // Same as our eslint-config
    'interface-over-type-literal': false
  }
}

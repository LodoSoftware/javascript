module.exports = {

  // D3 Overrides

  "env": {
    "amd": true
  },

  "globals": {
    "d3": true,
    "$": true
  },

  "rules": {
    // allow trailing commas in object literals
    'comma-dangle': [2, 'never'],

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 0,

    // specify the maximum length of a line in your program
    'max-len': [1, 200, 2, {
      'ignoreUrls': true,
      'ignoreComments': false
    }],

    // requires to declare all vars on top of their containing scope
    'vars-on-top': 0,

    // enforce padding within blocks
    'padded-blocks': [0, 'never'],

    // require return statements to either always or never specify values
    'consistent-return': 0,

    // require a capital letter for constructors
    'new-cap': [2, {'newIsCap': true, 'capIsNewExceptions': ['Deferred', 'SetOptions']}],

    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': [2, 'any'],

    ////////////////////////////////
    // TEMPORARY WARNINGS - we will want to remove these settings eventually, but we'll keep them as warnings for now.
    /////////////////////

    // ES6 warnings
    'no-var': 1,
    'object-shorthand': [1, 'always'],

    // changing this to a warning so we don't break existing functionality
    'no-param-reassign': [1, { 'props': true }],

    // too many to change all at once
    'space-before-function-paren': [1, { 'anonymous': 'never', 'named': 'never' }],
    'one-var': [1, 'never'],
    'indent': [1, 2, { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
    'keyword-spacing': [1, { before: true, after: true }],
    'key-spacing': [1, { 'beforeColon': false, 'afterColon': true }],
    'array-bracket-spacing': [1, 'never'],
    'object-curly-spacing': [1, 'always'],
    'comma-spacing': [1, {'before': false, 'after': true}],
    'quote-props': [1, 'as-needed', { 'keywords': false, 'unnecessary': true, 'numbers': false }],
    'no-nested-ternary': 1,
    'no-use-before-define': 1,
    'strict': 1,
    'prefer-template': 1,
    'prefer-arrow-callback': 1,
    'prefer-rest-params': 1,
    'one-var-declaration-per-line': 1
  }

};

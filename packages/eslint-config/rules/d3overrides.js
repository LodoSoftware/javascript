module.exports = {
  // D3 Overrides
  rules: {
    // allow trailing commas in object literals
    'comma-dangle': [2, 'never'],

    // specify the maximum length of a line in your program
    'max-len': [
      1,
      200,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],

    // requires to declare all vars on top of their containing scope
    'vars-on-top': 0,

    // enforce padding within blocks
    'padded-blocks': [0, 'never'],

    // require return statements to either always or never specify values
    'consistent-return': 0,

    // allow spacing inside array brackets
    'array-bracket-spacing': 0,

    // allow dangling underscores in variable names
    'no-underscore-dangle': 0,

    // allow use of classes and functions before they are defined
    'no-use-before-define': [1, { classes: false, functions: false }],

    // allow use of Object.prototypes builtins directly
    'no-prototype-builtins': [0],

    // enforce that class methods use "this"
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': [
      'off',
      {
        exceptMethods: []
      }
    ],

    // Allow chaining of assignment of variables
    'no-multi-assign': ['off'],

    // enforce line breaks between braces
    // http://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
        ObjectPattern: { minProperties: 6, multiline: true, consistent: true }
      }
    ],

    // Don't enforce line breaks in classes
    'lines-between-class-members': 'off',

    // Allow returning assignment if inside parens
    'no-return-assign': ['error', 'except-parens'],

    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    // Allow promise rejections to be strings
    'prefer-promise-reject-errors': 'off',

    // This doesn't really follow our pattern for reducers
    'default-case': 'off',

    // Allow using await in a loop
    'no-await-in-loop': 'off',

    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    'max-lines': [
      'warn',
      {
        max: 500,
        skipBlankLines: true,
        skipComments: true
      }
    ],

    // enforce a maximum function length
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': [
      'warn',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: false
      }
    ],

    // unused
    'no-useless-catch': ['off'],
    'prefer-named-capture-group': ['off']
  }
};

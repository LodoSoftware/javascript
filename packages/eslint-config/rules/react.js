module.exports = {
  plugins: ['react-hooks'],
  rules: {
    // Enforce component methods order
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    // 'react/sort-comp': [
    //   'error',
    //   {
    //     order: [
    //       'static-methods',
    //       'type-annotations',
    //       'instance-variables',
    //       'lifecycle',
    //       'getters',
    //       'setters',
    //       '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
    //       'everything-else',
    //       'instance-methods',
    //       '/^on.+$/',
    //       '/^render.+$/',
    //       'render'
    //     ]
    //   }
    // ],
    'react/sort-comp': 'off',

    // Enforce fragment shorthand
    // Disabling since version detection doesn't work
    'react/jsx-fragments': ['off'],

    // Allow tsx
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],

    // Conflicts with prettier
    'react/jsx-one-expression-per-line': 'off',

    // Don't require props/state to be destructured
    'react/destructuring-assignment': 'off',

    // Ensure correct use of hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // jsx-a11y

    // Replaced by jsx-a11y/control-has-associated-label
    'jsx-a11y/label-has-for': 'off',
    // Enforce label tag has associated control
    'jsx-a11y/control-has-associated-label': 'warn',

    // unused
    'react/jsx-props-no-spreading': 'off',
    'react/prefer-read-only-props': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off'
  }
};

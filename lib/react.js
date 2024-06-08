/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'jsx-quotes': 'error',
    'max-lines-per-function': ['error', { max: 100, skipBlankLines: true, skipComments: true }],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-curly-brace-presence': ['warn', { children: 'never', props: 'never' }],
    'react/jsx-curly-spacing': 'warn',
    'react/jsx-equals-spacing': 'warn',
    'react/jsx-filename-extension': 'error',
    'react/jsx-first-prop-new-line': 'warn',
    'react/jsx-handler-names': 'off',
    'react/jsx-max-props-per-line': ['warn', { when: 'multiline' }],
    'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': ['error', { allowAllCaps: true, allowNamespace: true }],
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-sort-props': 'warn', // 少しやり過ぎだけどpropsに対してソートをかける
    'react/jsx-tag-spacing': [
      'warn',
      {
        afterOpening: 'never',
        beforeSelfClosing: 'always',
        closingSlash: 'never'
      }
    ],
    'react/jsx-wrap-multilines': 'warn',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-danger': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-redundant-should-component-update': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unused-state': 'warn',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': [
      'warn',
      {
        order: ['type-annotations', 'static-methods', 'lifecycle', 'everything-else', 'render']
      }
    ],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error'
  },
  settings: {
    propWrapperFunctions: [
      'forbidExtraProps',
      { object: 'Object', property: 'freeze' },
      { property: 'myFavoriteWrapper' }
    ],
    react: {
      pragma: 'React',
      version: 'detect'
    }
  }
}

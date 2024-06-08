/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [],
  rules: {
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    'no-alert': 'off',
    'no-param-reassign': ['warn', { ignorePropertyModificationsFor: ['draft', 'd'] }],
    'react/display-name': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', 'jsx'] }],
    'react/prop-types': ['off', {}]
  }
}

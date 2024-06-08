/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  overrides: [
    {
      extends: ['plugin:jest/recommended'],
      files: ['**/*.test.ts', '**/*.test.tsx', '**/__stubs__/**/*.ts'],
      plugins: ['jest'],
      rules: {
        '@eslint-community/eslint-comments/disable-enable-pair': 'off',
        '@eslint-community/eslint-comments/no-aggregating-enable': 'off',
        '@eslint-community/eslint-comments/no-duplicate-disable': 'off',
        '@eslint-community/eslint-comments/no-unlimited-disable': 'off',
        '@eslint-community/eslint-comments/no-unused-disable': 'off',
        '@eslint-community/eslint-comments/no-unused-enable': 'off',
        '@eslint-community/eslint-comments/require-description': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        'deprecation/deprecation': 'off',
        'jest/no-alias-methods': 'off',
        'jest/no-commented-out-tests': 'off',
        'jest/no-conditional-expect': 'off',
        'jest/no-disabled-tests': 'error',
        'jest/no-standalone-expect': ['error', { additionalTestBlockFunctions: ['testSkipInCI'] }],
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'no-param-reassign': 'off',
        'no-restricted-syntax': 'off',
        'no-warning-comments': 'off'
      }
    }
  ]
}

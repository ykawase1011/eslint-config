/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'airbnb-typescript/base'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'deprecation'],

  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-expect-error': 'allow-with-description', 'ts-ignore': 'allow-with-description' }
    ],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      { multiline: { delimiter: 'none', requireLast: false }, singleline: { delimiter: 'semi', requireLast: false } }
    ],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        selector: 'variable',
        trailingUnderscore: 'allow'
      },
      { format: ['camelCase', 'PascalCase'], leadingUnderscore: 'allowSingleOrDouble', selector: 'function' },
      { format: ['camelCase'], leadingUnderscore: 'allowSingleOrDouble', selector: 'property' },
      { format: null, prefix: ['data-'], selector: 'property' },
      {
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowSingleOrDouble',
        selector: 'typeProperty'
      },
      {
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowSingleOrDouble',
        selector: 'objectLiteralProperty'
      },
      { format: ['camelCase'], leadingUnderscore: 'allowSingleOrDouble', selector: 'method' },
      { format: ['camelCase'], leadingUnderscore: 'allow', selector: 'parameter' },
      { format: ['PascalCase'], leadingUnderscore: 'allow', selector: 'typeParameter' },
      { format: ['PascalCase'], selector: 'typeAlias' }
    ],
    '@typescript-eslint/no-empty-function': ['error'],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-invalid-this': ['error'],
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-redeclare': ['off'],
    '@typescript-eslint/no-triple-slash-reference': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true
      }
    ],
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/restrict-template-expressions': ['error', { allowBoolean: true, allowNumber: true }],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      { allowNullableBoolean: true, allowNullableNumber: false, allowNullableString: false }
    ],
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
    '@typescript-eslint/unified-signatures': 'warn',
    'deprecation/deprecation': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'no-confusing-arrow': 'off',
    'no-empty-function': 'off',
    'no-invalid-this': 'off',
    'no-restricted-syntax': ['error', { message: "Don't declare enums", selector: 'TSEnumDeclaration' }],
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'require-await': 'off',
    // 最近追加
    '@typescript-eslint/no-empty-object-type': 'off',
    // 何故かエラーがおきたので無効化する
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-throw-literal': 'off'
  },
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': { typescript: { alwaysTryTypes: true } }
  }
}

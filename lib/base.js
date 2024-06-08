/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ['plugin:import/recommended', 'airbnb-base', 'plugin:@eslint-community/eslint-comments/recommended'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: ['sort-keys-fix'],
  rules: {
    '@eslint-community/eslint-comments/require-description': [
      'error',
      { ignore: ['eslint-enable', 'eslint-env', 'exported', 'global', 'globals'] }
    ],
    'array-bracket-spacing': 'warn',
    'array-callback-return': 'off',
    'arrow-parens': 'off',
    'block-scoped-var': 'warn',
    'block-spacing': 'warn',
    'brace-style': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': 'warn',
    'comma-style': 'warn',
    'complexity': ['error'],
    'computed-property-spacing': 'warn',
    'consistent-return': 'off',
    'curly': ['error', 'multi-line'],
    'default-case': 'off',
    'default-param-last': 'off',
    'dot-location': ['warn', 'property'],
    'dot-notation': 'error',
    'eqeqeq': [
      'warn',
      'always',
      {
        null: 'ignore'
      }
    ],
    'func-call-spacing': 'error',
    'generator-star-spacing': ['error', 'after'],
    'guard-for-in': 'warn',
    'import/extensions': 'off',
    'import/namespace': 'off',
    'import/no-anonymous-default-export': ['warn', { allowObject: true }],
    'import/no-cycle': 'error',
    'import/no-duplicates': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'error',
      {
        'alphabetize': { caseInsensitive: true, order: 'asc' },
        'newlines-between': 'never',
        'pathGroups': [
          {
            group: 'external',
            pattern: 'react',
            position: 'before'
          },
          {
            group: 'external',
            pattern: '@/**',
            position: 'after'
          },
          {
            group: 'external',
            pattern: '@test/**',
            position: 'after'
          },
          {
            group: 'external',
            pattern: '~/**',
            position: 'after'
          }
        ],
        'pathGroupsExcludedImportTypes': ['builtin']
      }
    ],
    'import/prefer-default-export': 'off',
    'interface-name': 'off',
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'linebreak-style': 'warn',
    'max-depth': 'error',
    'max-lines': ['error', { skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': ['error', { max: 80, skipBlankLines: true, skipComments: true }],
    'max-params': ['error'],
    'max-statements': 'off',
    'new-parens': 'error',
    'no-array-constructor': 'warn',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-confusing-arrow': 'off',
    'no-console': 'off',
    'no-div-regex': 'warn',
    'no-duplicate-imports': 'off',
    'no-else-return': 'error',
    'no-empty': ['off'],
    'no-empty-function': 'error',
    'no-empty-interface': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-label': 'warn',
    'no-extra-parens': ['error', 'functions'],
    'no-floating-decimal': 'error',
    'no-implicit-coercion': [
      'error',
      {
        boolean: false
      }
    ],
    'no-implicit-dependencies': 'off',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'warn',
    'no-invalid-this': 'warn',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': 'error',
    'no-multi-spaces': 'warn',
    'no-multi-str': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 2,
        maxEOF: 1
      }
    ],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'warn',
    'no-plusplus': 'error',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'warn',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-submodule-imports': 'off',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'warn',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'warn',
    'no-undef-init': 'warn',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unmodified-loop-condition': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        vars: 'local'
      }
    ],
    'no-use-before-define': 'off',
    'no-useless-call': 'warn',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'warn',
    'no-var': 'error',
    'no-void': 'off',
    'no-warning-comments': [
      'warn',
      {
        location: 'anywhere'
      }
    ],
    'no-whitespace-before-property': 'warn',
    'no-with': 'error',
    'nonblock-statement-body-position': 'warn',
    'object-property-newline': [
      'warn',
      {
        allowAllPropertiesOnSameLine: true
      }
    ],
    'object-shorthand': ['warn', 'properties'],
    'one-var': 'error',
    'one-var-declaration-per-line': 'warn',
    'operator-assignment': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true
      }
    ],
    'prefer-numeric-literals': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'warn',
    'prefer-template': 'error',
    'quote-props': 'off', // prettierで代用
    'quotes': ['error', 'single', 'avoid-escape'],
    'radix': 'error',
    'require-atomic-updates': 'error',
    'require-unicode-regexp': 'error',
    'rest-spread-spacing': 'warn',
    'semi': ['error', 'never'],
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-keys-fix/sort-keys-fix': 'off', // auto-fixしてくれるsort-keys（やりすぎなのでbaseではoff）
    'space-before-blocks': 'warn',
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never'
      }
    ],
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
    'spaced-comment': ['warn', 'always', { exceptions: ['/', '-', '+'], markers: ['/'] }],
    'switch-colon-spacing': 'warn',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'warn',
    'unicode-bom': 'warn',
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true
      }
    ],
    'vars-on-top': 'warn',
    'wrap-iife': ['error', 'any'],
    'yield-star-spacing': ['error', 'after'],
    'yoda': 'warn'
  }
}

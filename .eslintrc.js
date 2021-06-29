module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'project': './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'prefer-const': 'error',
    'eol-last': 'error',
    // 'comma-dangle': ['error', 'always-multiline'],
    'no-trailing-spaces': 'error',
    'no-unexpected-multiline': 'error',
    'object-shorthand': ['error', 'always'],
    // 'import-order': 'off',
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    // '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/strict-boolean-expressions': ['error', { allowNullableObject: true, allowNullableString: true, allowNullableBoolean: true, allowAny: true }],
    'no-useless-rename': 'error',
    'padding-line-between-statements': ['error',
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: '*', next: 'export' },
    ]
  },
  'overrides': [
    {
      'files': ['libraries/**'],
      'rules': {
        'padding-line-between-statements': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
      }
    },
    {
      'files': ['**/*.view.ts'],
      'rules': {
        '@typescript-eslint/explicit-function-return-type': 'off',
      }
    },
  ],
}

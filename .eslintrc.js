module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'react-hooks', 'react-native'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-native/no-inline-styles': 'warn',
        'react-native/no-unused-styles': 'warn',
        'react-native/no-single-element-style-arrays': 2,
        'react/no-unescaped-entities': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'sort-imports': [
          'error',
          {ignoreCase: true, ignoreDeclarationSort: true},
        ],
        'import/order': [
          'error',
          {
            groups: [
              ['external', 'builtin'],
              'internal',
              ['sibling', 'parent'],
              'index',
            ],
            pathGroups: [
              {
                pattern: '@(react|react-native)',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@/**',
                group: 'internal',
              },
              {
                pattern: './**',
                group: 'index',
              },
            ],
            pathGroupsExcludedImportTypes: ['internal', 'react'],
            'newlines-between': 'never',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
};

/* module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'react-hooks', 'react-native'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-native/no-inline-styles': 'warn',
        'react-native/no-unused-styles': 'warn',
        'react-native/no-single-element-style-arrays': 2,
        'react/no-unescaped-entities': 'off',
        'sort-imports': [
          'error',
          {ignoreCase: true, ignoreDeclarationSort: true},
        ],
        'import/order': [
          'error',
          {
            groups: [
              ['external', 'builtin'],
              'internal',
              ['sibling', 'parent'],
              'index',
            ],
            pathGroups: [
              {
                pattern: '@(react|react-native)',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@/**',
                group: 'internal',
              },
              {
                pattern: './**',
                group: 'index',
              },
            ],
            pathGroupsExcludedImportTypes: ['internal', 'react'],
            'newlines-between': 'never',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
};
 */

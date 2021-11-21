module.exports = {
  root: true,
  plugins: [
      'eslint-plugin',
      '@typescript-eslint',
      'import',
      'eslint-comments',
      'react',
      'react-native',
      'react-hooks',
  ],
  env: {
      es6: true,
      node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true,
      },
      warnOnUnsupportedTypeScriptVersion: false,
      project: './tsconfig.json',
  },
  settings: {
      'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      react: {
          version: 'detect',
      },
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:jsx-a11y/recommended',
      'react-app',
  ],
  rules: {
      // Code-style
      'arrow-parens': ['error', 'as-needed'],
      camelcase: 0,
      'class-methods-use-this': 0,
      'consistent-return': 0,
      'comma-dangle': [
          'warn',
          {
              arrays: 'always-multiline',
              objects: 'always-multiline',
              imports: 'always-multiline',
              exports: 'always-multiline',
              functions: 'always-multiline',
          },
      ],
      quotes: ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-double'],
      'import/no-extraneous-dependencies': 0,
      indent: [
          'error',
          4,
          {
              SwitchCase: 1,
          },
      ],
      'max-len': [
          'error',
          {
              code: 150,
              tabWidth: 4,
              ignoreComments: true,
              ignoreTrailingComments: true,
              ignoreUrls: true,
              ignoreStrings: true,
              ignoreTemplateLiterals: true,
          },
      ],
      'max-params': 0,
      'space-in-parens': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-blocks': ['error', 'always'],
      'keyword-spacing': ['error', {before: true, after: true}],
      semi: ['error', 'always'],
      'eol-last': ['error', 'always'],
      'no-cond-assign': ['error', 'except-parens'],
      'no-implicit-coercion': 0,
      'no-else-return': 0,
      'no-extra-boolean-cast': 0,
      'no-nested-ternary': 0,
      'no-plusplus': 0,
      'no-prototype-builtins': 0,
      'no-return-await': 0,
      'no-underscore-dangle': 0,
      'no-unused-vars': 0,
      'no-use-before-define': 0,
      'no-useless-escape': 0,
      'prefer-rest-params': 0,
      'object-curly-spacing': ['error', 'never'],
      'operator-linebreak': 0,
      'space-before-function-paren': [
          'error',
          {
              anonymous: 'always',
              named: 'never',
              asyncArrow: 'always',
          },
      ],
      'no-console': 'error',
      'no-process-exit': 'error',
      'no-multiple-empty-lines': [
          'error',
          {
              max: 1,
          },
      ],
      'no-multi-spaces': 'error',

      // TypeScript
      '@typescript-eslint/no-angle-bracket-type-assertion': 0,
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/no-unnecessary-type-assertion': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/explicit-function-return-type': 0,

      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-misused-promises': 0,
      '@typescript-eslint/no-this-alias': 0,
      '@typescript-eslint/unbound-method': 0,
      '@typescript-eslint/await-thenable': 0,
      '@typescript-eslint/prefer-regexp-exec': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/ban-ts-ignore': 0,
      '@typescript-eslint/no-unused-vars': [
          'error',
          {
              vars: 'all',
              args: 'all',
              varsIgnorePattern: '^_',
              argsIgnorePattern: '^_',
              ignoreRestSiblings: true,
          },
      ],

      //TODO REMOVE #20
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/no-unsafe-call': 0,
      '@typescript-eslint/no-unsafe-return': 0,
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/no-unsafe-member-access': 0,
      // ASCII
      'ascii/valid-name': 0,

      // React
      'react/jsx-no-useless-fragment': 2,
      'react/jsx-wrap-multilines': 'error',
      'react/jsx-no-bind': 0,
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/display-name': 0,
      'react/prop-types': 0,
      'react/no-children-prop': 0,
      'react/jsx-curly-spacing': [
          'error',
          {
              when: 'never',
          },
      ],
      'react/jsx-tag-spacing': [
          'warn',
          {
              closingSlash: 'never',
              beforeSelfClosing: 'never',
              afterOpening: 'never',
              beforeClosing: 'never',
          },
      ],
      'react/jsx-newline': [
          'error',
          {
              prevent: false,
          },
      ],
      'react/jsx-max-props-per-line': [
          'error',
          {
              maximum: 2,
          },
      ],
      'react/jsx-curly-brace-presence': 'error',
      'import/no-anonymous-default-export': 0,
      // React Hooks
      'react-hooks/rules-of-hooks': 2,
      'react-hooks/exhaustive-deps': 2,

      //imports
      'import/order': [
          'warn',
          {
              groups: [
                  ['builtin', 'external'],
                  'internal',
                  ['parent', 'sibling'],
                  'index',
              ],
              pathGroups: [
                  {
                      pattern: '*__*',
                      group: 'internal',
                  },
                  {
                      pattern: '*__*/**',
                      group: 'internal',
                  },
                  {
                      pattern: '*__components/**',
                      group: 'internal',
                      position: 'before',
                  },
                  {
                      pattern: '*__screens/**',
                      group: 'internal',
                      position: 'before',
                  },
              ],
              pathGroupsExcludedImportTypes: ['internal'],
              alphabetize: {
                  order: 'asc',
                  caseInsensitive: true,
              },
              'newlines-between': 'always',
          },
      ],
  },
  overrides: [
      {
          files: ['*.ts', '*.tsx'],
          rules: {
              '@typescript-eslint/explicit-module-boundary-types': ['off'],
          },
      },
  ],
};

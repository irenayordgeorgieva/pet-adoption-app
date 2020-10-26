module.exports = {
  env: {
    amd: true,
    browser: true,
    node: true,
  },
  extends: ['eslint:all', 'plugin:react/all', 'plugin:@typescript-eslint/all'],
  ignorePatterns: ['next-env.d.ts'],
  parserOptions: {
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/comma-dangle': ['error', {
      arrays: 'always-multiline',
      exports: 'never',
      functions: 'never',
      imports: 'never',
      objects: 'always-multiline',
    }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowTypedFunctionExpressions: true },
    ],
    '@typescript-eslint/indent': ['error', 2, { ignoredNodes: ['JSXElement *', 'JSXElement'] }],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-extra-parens': ['error', 'all', { ignoreJSX: 'all' }],
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': ['off', { checkParameterProperties: false }],
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/space-before-function-paren': ['error', { anonymous: 'always', asyncArrow: 'always', named: 'never' }],
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'class-methods-use-this': ['error', {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
      ],
    }],
    'comma-dangle': 'off',
    'dot-location': ['error', 'property'],
    'indent': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'linebreak-style': 'off',
    'max-len': ['error', {
      code: 120,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      tabWidth: 2,
    }],
    'no-empty-pattern': 'off',
    'no-magic-numbers': 'off',
    'object-curly-newline': ['error', { consistent: true, multiline: true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'one-var': ['error', 'never'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': 'off',
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-depth': ['error', { max: 5 }],
    'react/jsx-max-props-per-line': ['error', { maximum: 3, when: 'multiline' }],
    'react/jsx-no-bind': ['error', {
      allowArrowFunctions: true,
      ignoreDOMComponents: true,
      ignoreRefs: true,
    }],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-props-no-spreading': ['error', {
      custom: 'ignore',
      explicitSpread: 'ignore',
      html: 'enforce',
    }],
    'semi': ['error', 'never'],
    'space-before-function-paren': 'off',
  },
  settings: {
    react: {
      version: '999.999.999',
    },
  },
}

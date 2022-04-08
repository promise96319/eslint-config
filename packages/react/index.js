module.exports = {
  extends: [
    'plugin:react/recommended',
    '@qgh/eslint-config-ts',
  ],
  plugins: [
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],

    // Overrides https://github.com/yannickcr/eslint-plugin-react
    'react/display-name': 'off',
    'react/prefer-es6-class': ['error', 'always'],
    // 强制 style 为对象
    'react/style-prop-object': ['error', {}],
    // 排序
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        'render',
        'everything-else',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'state',
          'getInitialState',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
        ],
      },
    }],

    // JSX
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    // 大括号
    'react/jsx-curly-newline': ['error', 'consistent'],
    // 等号之间的空格
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-indent': ['error', 2],
    // 多个属性换行
    'react/jsx-max-props-per-line': ['error', {
      maximum: { single: 1, multi: 1 },
    }],
    // 第一个属性是否换行
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    // 组件名称
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: false,
      allowNamespace: true,
      allowLeadingUnderscore: false,
    }],
    'react/jsx-no-useless-fragment': 'error',
    // 属性空白不能过多
    'react/jsx-props-no-multi-spaces': 'error',
    // 标签空白
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    // jsx 包裹圆括号
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],

  },
}

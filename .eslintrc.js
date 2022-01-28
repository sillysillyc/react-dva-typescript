module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: [
    'react-app',
    '@typescript-eslint',
    'prettier'
  ],
  extends: [
    'plugin:react-app/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    'func-call-spacing': 0,
    'no-extra-parens': 0,
    'no-magic-numbers': 0,
    'no-unused-vars': 0,
    semi: 0,
    'react/sort-comp': 0,
    'react/prop-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    'jsx-control-statements/jsx-use-if-tag': 0,
    'jsx-a11y/anchor-is-valid': 0,
    // 允许驼峰
    '@typescript-eslint/camelcase': 0,
    // 不允许定义空接口
    '@typescript-eslint/no-empty-interface': 1,
    // 导入必须按照字母顺序
    'ordered-imports': 0,
    // 必须使用箭头函数
    'only-arrow-functions': 0,
    // 不会重新赋值的一定要用const声明
    'prefer-const': 0,
    // class public/private/protected 的属性/方法排序方式
    'member-ordering': 0,
    // class默认类型为public
    'member-access': 0,
    // 限制单个文件中只能定义一个class
    'max-classes-per-file': 0,
    // 不允许空代码块
    'no-empty': 0,
    // 不允许使用console
    'no-console': 0,
    // 对象属性必须按字母顺序书写
    'object-literal-sort-keys': 0,
    // JSX中不允许写lambda表达式
    'jsx-no-lambda': 0,
    // 限制单个文件中只能定义一个class
    'no-string-literal': 0,
    // Type literal has only a call signature
    'callable-types': 0,
    // 不允许使用var module = require("module"), 用 import foo = require('foo')导入
    'no-var-requires': 0,
    // 类型声明的冒号之前是否需要空格
    'typedef-whitespace': 0,
    // 禁止使用 eval
    'no-eval': 2,
    // 前者的类型检查更完善
    'prefer-object-spread': 1,
    // 缩进冲突
    '@typescript-eslint/indent': [
      2,
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: false,
      },
    ],
    // 禁止出现重复的 import
    'no-duplicate-imports': 2,
    // new 后面只必须有一个空格
    'new-parens': 2,
    // 禁止连续超过三行空行
    'no-multiple-empty-lines': [
      2,
      {
        max: 2,
      },
    ],
    // 禁止使用特殊空白符（比如全角空格）
    'no-irregular-whitespace': 2,
    // if 后面必须有 {，除非是单行 if
    curly: 2,
    // 函数名前必须有空格
    'space-before-function-paren': 0,
    // 禁止 finally 内出现 return, continue, break, throw 等
    // finally 会比 catch 先执行
    'no-unsafe-finally': 2,
    // 不允许导入子模块
    'no-submodule-imports': 0,
    // 解决@作为跟路径来导入模块
    'no-implicit-dependencies': 0,
    // 偏向使用条件表达式
    'prefer-conditional-expression': 0,
    'no-debugger': 2,
    'no-multi-spaces': 2,
    'use-isnan': 2,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-async-promise-executor': 1,
  }
};

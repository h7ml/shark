module.exports = {
  // 箭头函数只有一个参数的时候可以忽略括号
  arrowParens: 'avoid',
  // 括号内部不要出现空格
  bracketSpacing: true,
  // 行结束符使用 Unix 格式
  endOfLine: 'lf',
  // 换行方式
  proseWrap: 'preserve',
  // 分号
  semi: true,
  // 使用单引号
  singleQuote: false,
  // 缩进
  tabWidth: 2,
  // 使用 tab 缩进
  useTabs: false,
  // 后置逗号，多行对象、数组在最后一行增加逗号
  trailingComma: 'all',
  parser: 'typescript',
  // 一行最多 100 字符
  printWidth: 100,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Number.POSITIVE_INFINITY,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
}

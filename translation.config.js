const path = require('node:path')

module.exports = {
  form: 'zh',
  target: 'en',
  i18nPath: {
    zh: path.join('src', 'assets', 'locales', 'zh-CN.json'),
    en: path.join('src', 'assets', 'locales', 'en-US.json'),
  },
}

const path = require('node:path')
const fs = require('node:fs').promises
const { program } = require('commander')
const ora = require('ora')
const chalk = require('chalk')
const { translationAction, translateText } = require('./action')

const rootDir = process.cwd() // 获取当前工作目录

/**
 * 读取翻译文件内容
 * @param {string} filePath - 文件路径
 * @returns {Promise<object>} - 返回读取的 JSON 对象或空对象
 */
async function readTranslationFile(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8')
    return fileContent ? JSON.parse(fileContent) : {}
  }
  catch (error) {
    console.error('读取文件时出错：', error)
    return {}
  }
}

/**
 * 拼接文件路径
 * @param {string} filePath - 文件路径
 * @returns {Promise<string>} - 返回拼接后的完整文件路径
 */
async function joinPath(filePath) {
  return path.join(rootDir, filePath)
}

/**
 * 检查翻译文件路径是否存在并读取配置
 * @param {string} filePath - 文件路径
 */
async function checkTranslationPathExist(filePath) {
  try {
    await fs.access(filePath)
    const fileContent = await fs.readFile(filePath, 'utf8')
    await evalConfig(fileContent)
  }
  catch (error) {
    console.error('文件不存在或无法访问：', error)
  }
}

/**
 * 解析配置文件并进行翻译
 * @param {string} fileContent - 文件内容
 */
async function evalConfig(fileContent) {
  // eslint-disable-next-line no-eval
  const config = eval(fileContent)
  const { zh, en } = config.i18nPath
  const zhContent = await readTranslationFile(await joinPath(zh))
  const enContent = await readTranslationFile(await joinPath(en))
  await translation(config.i18nPath, zhContent, enContent)
}

/**
 * 进行翻译
 * @param {object} config - 配置对象
 * @param {object} zhObj - 中文对象
 * @param {object} enObj - 英文对象
 */
async function translation(config, zhObj, enObj) {
  const loading = ora('开始翻译...').start()
  try {
    await processNestedKeys(zhObj, enObj)
    loading.succeed(chalk.green('翻译完成...'))
  }
  catch (error) {
    console.log(
      '%c [ error ]-77',
      'font-size:13px; background:pink; color:#bf2c9f;',
      error,
    )
    loading.fail(chalk.red('翻译失败：'))
  }

  const updatedEnContent = `${JSON.stringify(enObj, null, 2)}\n`
  await fs.writeFile(await joinPath(config.en), updatedEnContent, 'utf8')
}

/**
 * 处理嵌套键值对，将中文对象中的文本翻译成英文并赋值给英文对象
 *
 * @param zhObj 中文对象
 * @param enObj 英文对象
 * @returns Promise<void>
 */
async function processNestedKeys(zhObj, enObj) {
  for (const key in zhObj) {
    // eslint-disable-next-line no-prototype-builtins
    if (zhObj.hasOwnProperty(key)) {
      if (typeof zhObj[key] === 'object')
        await processNestedKeys(zhObj[key], enObj[key])
      else if (zhObj[key])
        enObj[key] = await translateText(zhObj[key], 'en')
    }
  }
}

/**
 * 注册命令行参数和选项，并执行翻译操作
 */
async function registerCommands() {
  const translationPath = await joinPath('translation.config.js')
  await checkTranslationPathExist(translationPath)

  program.option('--text <message>', '需要翻译的信息')
  const options = program.opts()
  const customArg = process.argv[2]
  if (
    customArg
    && !customArg.includes('--')
    && customArg === process.argv[process.argv.length - 1]
    && !options.text
  )
    await translationAction(customArg)
  else if (options.text)
    await translationAction(options.text)
}

module.exports = {
  registerCommands,
}

const path = require('node:path')
const fs = require('node:fs').promises
const { program } = require('commander')
const { translationAction, translateText } = require('./action')

const rootDir = process.cwd()

async function readTranslationFile(filePath) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8')
    if (fileContent)
      return JSON.parse(fileContent)
    else
      return {}
  }
  catch (error) {
    console.error('读取文件时出错：', error)
    return {}
  }
}

async function joinPath(filePath) {
  return path.join(rootDir, filePath)
}

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

async function evalConfig(fileContent) {
  const config = JSON.parse(fileContent) // 直接解析 JSON 配置文件
  const { zh, en } = config.i18nPath
  const zhContent = await readTranslationFile(path.join(rootDir, zh))
  const enContent = await readTranslationFile(path.join(rootDir, en))

  const testObj = {
    text: '子非鱼',
  }
  const text = await translateText(testObj.text)
  console.log(`纵使山高路远，莫道止步不前：${text}`)
  const updatedEnContent = `${JSON.stringify(
    {
      zifeiyu: text,
    },
    null,
    2,
  )}\n`

  await fs.writeFile(path.resolve(rootDir, 'test.json'), updatedEnContent, 'utf8')
}

async function registerCommands() {
  const translationPath = await joinPath('translation.config.js')
  await checkTranslationPathExist(translationPath)

  // 注册命令行参数和选项
  program.option('--text <message>', '需要翻译的信息')

  const options = program.opts()
  const customArg = process.argv[2]
  if (!customArg)
    return
  if (!customArg.includes('--') && customArg === process.argv[process.argv.length - 1] && !options.text)
    await translationAction(customArg)
  else if (options.text)
    await translationAction(options.text)
}

module.exports = {
  registerCommands,
}

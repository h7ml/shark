const fs = require('node:fs').promises
const path = require('node:path')
const ora = require('ora')
const chalk = require('chalk')
const { joinPath, readTranslationFile } = require('./lib/core/command')

let loading = null
/**
 * 生成指定长度的英文字符串
 * @param {number} length - 字符串长度
 * @returns {string} - 生成的英文字符串
 */
function generateRandomString(length) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * characters.length))

  return result
}

/**
 * 检查文件内容是否包含特定字符串，并在文件第一行插入特定内容
 * @param {string} filePath - 文件路径
 * @param {string} searchString - 要检查的字符串
 * @param {string} insertContent - 要插入的内容
 */
async function checkAndInsertContent(
  filePath,
  searchString = 'import { t } from \'@/utils\'',
  insertContent = 'import { t } from \'@/utils\'',
) {
  try {
    loading.succeed(chalk.green(`检查${filePath} i18n组件导入情况 ...`))
    // 读取文件内容
    const fileData = await fs.readFile(filePath, 'utf8')

    // 检查文件内容是否包含特定字符串
    if (!fileData.includes(searchString)) {
      // 如果文件内容中不存在特定内容，则在文件第一行插入特定内容
      const newFileData = `${insertContent}\n${fileData}`

      // 将新的文件内容写回文件
      fs.writeFile(filePath, newFileData, 'utf8')
      loading.succeed(chalk.green(`${filePath} 导入i18n组件成功`))
    }
    else {
      loading.succeed(chalk.green(`${filePath} 导入i18n组件成功`))
    }
  }
  catch (err) {
    loading.fail(chalk.red(`${filePath} 导入i18n失败: ${err.message}`))
  }
}

/**
 * 读取文件内容
 * @param {string} filePath - 文件路径
 * @returns {Promise<string>} - 文件内容
 */

// eslint-disable unused-imports/no-unused-vars
// async function readFileContent(filePath) {
//   try {
//     loading.succeed(chalk.green(`读取 ${filePath}`))
//     return await fs.readFile(filePath, 'utf8')
//   }
//   catch (err) {
//     loading.fail(chalk.red(`读取 ${filePath} 出错： ${err.message}`))
//     // throw new Error(`Error reading file ${filePath}: ${err.message}`);
//   }
// }

/**
 * 写入文件内容
 * @param {string} filePath - 文件路径
 * @param {string} content - 要写入的内容
 */
async function writeFileContent(filePath, content) {
  try {
    loading.succeed(chalk.green(`写入文件 ${filePath} ...`))
    await fs.writeFile(filePath, content, 'utf8')
  }
  catch (err) {
    loading.fail(chalk.red(`写入 ${filePath} 出错： ${err.message}`))
  }
}

/**
 * 处理翻译文件
 *
 * @returns 处理后的翻译内容
 */
async function processTranslationFiles() {
  loading.succeed(chalk.green('处理翻译内容 ...'))
  // 读取 i18n.json 文件的内容
  const fileContent = await readTranslationFile(await joinPath('i18n.json'))
  const processedContent = {}

  for (const key in fileContent) {
    const filePath = await joinPath(key)
    await checkAndInsertContent(filePath)
    const strArr = fileContent[key].split(',')
    strArr.forEach((item) => {
      processedContent[generateRandomString(8)] = item
    })
  }
  loading.succeed(chalk.green('处理翻译内容完成'))
  return processedContent
}

async function updateZhJson(processedContent) {
  const zhJson = await joinPath(
    path.join('src', 'assets', 'locales', 'zh-CN.json'),
  )
  const zhContent = await readTranslationFile(zhJson)
  const writeContent = { ...zhContent, ...processedContent }
  const updatedEnContent = `${JSON.stringify(writeContent, null, 2)}\n`
  await writeFileContent(zhJson, updatedEnContent)
  loading.succeed(chalk.green('zhCN.json 文件更新完成'))
}

/**
 * 主函数，用于处理主要逻辑
 */
async function main() {
  loading = ora('Starting...').start()
  const processedContent = await processTranslationFiles()
  loading.succeed(chalk.green('开始更新 zh-CN.json 文件...'))
  await updateZhJson(processedContent)
}

// 执行主函数
main()

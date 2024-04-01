const fs = require('node:fs')
const path = require('node:path')

/**
 * 处理并保存中文内容到i18n.json文件中
 *
 * @param filePath 文件路径
 */
function processAndSaveChineseContent(filePath) {
  // 解析文件路径，获取目录和文件名
  const { dir, base } = path.parse(filePath)
  // 处理filePath中的反斜杠，获取标准化的文件路径
  const normalizedFilePath = `${dir.replace(/\\/g, '/').split('shark')[1]}/${base}`

  // 读取文件内容
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    // 匹配所有中文内容并转换为逗号分隔的字符串
    const chineseMatches = data.match(/[\u4E00-\u9FFF]+/g)
    const chineseString = chineseMatches ? chineseMatches.join(',') : ''

    if (chineseString) {
      const i18nData = {}
      i18nData[normalizedFilePath] = chineseString

      // 读取现有的i18n.json文件内容，并处理可能的异常
      let existingData = {}
      try {
        const jsonData = fs.readFileSync('i18n.json', 'utf8')
        existingData = JSON.parse(jsonData)
      }
      catch (readErr) {
        console.error('Error reading i18n.json:', readErr.message)
        // 如果读取错误，将 existingData 置为空对象
        existingData = {}
      }

      // 如果文件路径已经存在，则覆盖原有内容，否则追加新内容
      // eslint-disable no-prototype-builtins
      if (existingData.hasOwnProperty(normalizedFilePath))
        existingData[normalizedFilePath] = i18nData[normalizedFilePath]
      else Object.assign(existingData, i18nData)

      // 将更新后的数据写入到i18n.json文件中
      fs.writeFileSync('i18n.json', JSON.stringify(existingData, null, 2))
    }
  })
}

/**
 * 遍历指定目录中的所有文件，处理并保存中文内容
 * @param {string} directory - 目录路径
 */
function traverseDirectory(directory) {
  fs.readdirSync(directory).forEach((file) => {
    const fullPath = path.join(directory, file)

    // 跳过系统保护的目录和node_modules目录
    if (
      fullPath.includes('$RECYCLE.BIN')
      || fullPath.includes('System Volume Information')
      || fullPath.includes('node_modules')
    )
      return

    try {
      const stats = fs.lstatSync(fullPath)
      if (stats.isDirectory())
        traverseDirectory(fullPath)
      else if (fullPath.endsWith('.tsx'))
        processAndSaveChineseContent(fullPath)
    }
    catch (err) {
      console.error(`Error processing ${fullPath}: ${err.message}`)
    }
  })
}

// 获取当前项目目录，并遍历处理所有文件
const projectDirectory = process.cwd()
traverseDirectory(projectDirectory)

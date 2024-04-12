const fs = require("node:fs");
const path = require("node:path");
const ora = require("ora");
const chalk = require("chalk");
const { joinPath } = require("./lib/core/command");

let loading = null;

/**
 * 处理并保存中文内容到i18n.json文件中
 *
 * @param filePath 文件路径
 */
async function processAndSaveChineseContent(filePath) {
  return new Promise((resolve, reject) => {
    // 解析文件路径，获取目录和文件名
    const { dir, base } = path.parse(filePath);
    // 处理filePath中的反斜杠，获取标准化的文件路径
    const normalizedFilePath = `${dir.replace(/\\/g, "/").split("shark")[1]}/${base}`;

    // 读取文件内容
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      // 匹配所有中文内容并转换为逗号分隔的字符串
      const chineseMatches = data.match(/[\u4E00-\u9FFF]+/g);
      // const chineseString = chineseMatches ? chineseMatches.join(",") : "";

      // 获取匹配到的中文内容所在的文件行数和具体内容
      const lines = data.split("\n");
      const matchesWithLines = lines.reduce((accumulator, line, index) => {
        // 忽略包含特殊注释的行
        if (
          line.includes("//") ||
          line.includes("/*") ||
          line.includes("/@") ||
          line.includes("*")
        )
          return accumulator;

        if (
          chineseMatches &&
          chineseMatches.some((chinese) => line.includes(chinese))
        ) {
          accumulator.push({
            lineNumber: index + 1,
            content: line.trim().match(/[\u4E00-\u9FFF]+/g),
          });
        }
        return accumulator;
      }, []);

      if (matchesWithLines.length > 0) {
        const i18nData = {};
        i18nData[normalizedFilePath] = matchesWithLines
          .map((match) => match.content)
          .join(",");

        // 读取现有的i18n.json文件内容，并处理可能的异常
        let existingData = {};
        try {
          const jsonData = fs.readFileSync("i18n.json", "utf8");
          existingData = JSON.parse(jsonData);
        } catch (readErr) {
          console.error("读取i18n.json文件出错:", readErr.message);
          // 如果读取错误，将 existingData 置为空对象
          existingData = {};
        }

        // 如果文件路径已经存在，则覆盖原有内容，否则追加新内容
        if (existingData.hasOwnProperty(normalizedFilePath))
          existingData[normalizedFilePath] = i18nData[normalizedFilePath];
        else Object.assign(existingData, i18nData);

        // 将更新后的数据写入到i18n.json文件中
        fs.writeFileSync("i18n.json", JSON.stringify(existingData, null, 2));
      }
      resolve();
    });
  });
}

async function i18nignore() {
  const fileArray = [];
  const i18nignore = await joinPath(".i18nignore");
  const ignoreContent = fs.readFileSync(i18nignore, "utf8");
  const ignoreList = ignoreContent.split("\n");

  for (const filePath of ignoreList) {
    const fullPath = await joinPath(filePath.trim());
    if (fs.existsSync(fullPath)) fileArray.push(fullPath);
  }
  return fileArray;
}

/**
 * 遍历指定目录中的所有文件，处理并保存中文内容
 * @param {string} directory - 目录路径
 */
async function traverseDirectory(directory) {
  const ignoreContent = await i18nignore();
  fs.readdirSync(directory).forEach(async (file) => {
    const fullPath = path.join(directory, file);
    // 跳过系统保护的目录和node_modules目录
    if (
      fullPath.includes("$RECYCLE.BIN") ||
      fullPath.includes("System Volume Information") ||
      fullPath.includes("node_modules")
    )
      return;

    try {
      const stats = fs.lstatSync(fullPath);
      if (stats.isDirectory()) {
        await traverseDirectory(fullPath);
      } else if (fullPath.endsWith(".tsx")) {
        for (const ignorePath of ignoreContent) {
          if (ignorePath === fullPath)
            loading.succeed(chalk.green(`跳过忽略文件：${fullPath} `));
          else await processAndSaveChineseContent(fullPath);
        }
      }
    } catch (err) {
      console.error(`处理 ${fullPath} 出错: ${err.message} `);
    }
  });
}

async function main() {
  try {
    loading = ora("开始处理...").start();
    await traverseDirectory(process.cwd());
    loading.succeed(chalk.green("处理完成。"));
  } catch (err) {
    loading.fail(chalk.red(`出错了: ${err.message} `));
  }
}

main();

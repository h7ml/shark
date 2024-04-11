#!/usr/bin/env node

const { exec } = require('node:child_process')
const path = require('node:path')
const ora = require('ora')
const chalk = require('chalk')

const projectRoot = path.resolve(__dirname, '.')
const loading = ora('执行命令中...').start()

const commands = [
  `node ${path.join(projectRoot, 'extract.js')}`,
  `node ${path.join(projectRoot, 'replace.js')}`,
  `node ${path.join(projectRoot, 'index.js')}`,
]

async function runCommands(commands) {
  for (const command of commands) {
    loading.text = `正在执行命令: ${command}`
    try {
      await executeCommand(command)
    }
    catch (error) {
      // 如果某个命令执行失败，记录错误信息，但继续执行其他命令
      loading.fail(chalk.green(`日志信息: \n ${error} `))
    }
  }
  process.exit(0)
  // 所有命令执行完成，停止 ora 加载动画
  loading.succeed(chalk.green(`所有命令执行完成。`))
}

function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error.message)
        return
      }
      if (stderr) {
        reject(stderr)
        return
      }
      console.log(`命令的输出: ${stdout}`)
      resolve()
    })
  })
}

runCommands(commands)

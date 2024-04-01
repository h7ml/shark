const chalk = require('chalk')

function formatDictReslut(data) {
  let resultMessge = ''
  data.forEach((item, index) => {
    const result = item.explain.split('; ')
    let explainString = ''
    result.forEach((item, indey) => {
      explainString
        += chalk.yellow(item) + (indey + 1 < result.length ? chalk.green(' | ') : '')
    })
    resultMessge += `${chalk.blue(item.entry)}: ${explainString}${index + 1 < data.length ? '\n' : ''
      }`
  })
  return resultMessge
}

function formatSentenceResult(data) {
  let resultMessage = ''
  let index = 1

  data.forEach((item) => {
    resultMessage += `${chalk.blue(item.src)}: ${chalk.yellow(item.dst)}${index < data.length ? '\n' : ''
      }`
    index++
  })
  return resultMessage
}

module.exports = {
  formatDictReslut,
  formatSentenceResult,
}

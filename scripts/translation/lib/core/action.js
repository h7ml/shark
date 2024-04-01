const ora = require('ora')
const chalk = require('chalk')
const axios = require('axios')
const { getDictData, getSentenceData } = require('../utils/tran-data')
const { formatDictReslut, formatSentenceResult } = require('../utils/format')
const { translationBase } = require('../core/config')
const { md5String } = require('../utils/md5')

async function translationAcion(message) {
  if (!message)
    return false

  const loading = ora('开始查询').start()

  getDictData({ q: message })
    .then((res) => {
      if (res.result.code === 200) {
        const result = formatDictReslut(res.data.entries)
        loading.succeed(chalk.green('查询成功：'))
        console.log()
        console.log(result)
        console.log()
        console.log()
      }
      else if (res.result.code === 404) {
        getSentenceData({ q: message })
          .then((res) => {
            loading.succeed(chalk.green('查询成功：'))
            const result = formatSentenceResult(res.trans_result)
            console.log()
            console.log(result)
            console.log()
            console.log()
          })
          .catch((err) => {
            loading.fail(chalk.red('查询失败：'))
            console.log(err)
          })
      }
    })
    .catch((err) => {
      loading.fail(chalk.red('查询失败：'))
      console.log(err)
    })
}
async function translateText(text) {
  const { baidu } = translationBase

  const sign = md5String(baidu.appid + text + baidu.salt + baidu.key)

  try {
    const response = await axios.get(
      'https://api.fanyi.baidu.com/api/trans/vip/translate',
      {
        params: {
          q: text,
          appid: translationBase.baidu.appid,
          salt: translationBase.baidu.salt,
          sign,
          from: 'zh',
          to: 'en',
        },
        headers: {
          Connection: 'keep-alive',
        },
      },
    )

    const responseData = response.data
    return responseData.trans_result[0].dst // 返回数据给调用方
  }
  catch (error) {
    console.error('请求错误:', error)
    throw error // 抛出错误给调用方处理
  }
}
module.exports = {
  translateText,
  translationAcion,
}

const ora = require("ora");
const chalk = require("chalk");
const axios = require("axios");
const { getDictData, getSentenceData } = require("../utils/tran-data");
const { formatDictReslut, formatSentenceResult } = require("../utils/format");
const { translationBase } = require("../core/config");
const { md5String } = require("../utils/md5");

async function translationAcion(message) {
  if (!message) return false;

  const loading = ora("开始查询").start();

  getDictData({ q: message })
    .then((res) => {
      if (res.result.code === 200) {
        const result = formatDictReslut(res.data.entries);
        loading.succeed(chalk.green("查询成功："));
        console.log();
        console.log(result);
        console.log();
        console.log();
      } else if (res.result.code === 404) {
        getSentenceData({ q: message })
          .then((res) => {
            loading.succeed(chalk.green("查询成功："));
            const result = formatSentenceResult(res.trans_result);
            console.log();
            console.log(result);
            console.log();
            console.log();
          })
          .catch((err) => {
            loading.fail(chalk.red("查询失败："));
            console.log(err);
          });
      }
    })
    .catch((err) => {
      loading.fail(chalk.red("查询失败："));
      console.log(err);
    });
}

// https://api.fanyi.baidu.com/product/113
async function translateText(q, to = "en") {
  const {
    baidu: { appid, salt, key, from },
  } = translationBase;
  const sign = md5String(appid + q + salt + key);
  try {
    const response = await axios.get(
      "https://api.fanyi.baidu.com/api/trans/vip/translate",
      {
        params: {
          q,
          appid,
          salt,
          sign,
          from,
          to,
        },
      },
    );

    const responseData = response.data;

    if (responseData.trans_result && responseData.trans_result.length > 0) {
      return responseData.trans_result[0].dst;
    } else {
      throw new Error("翻译结果为空");
      console.log(
        "%c [ responseData ]-70",
        "font-size:13px; background:pink; color:#bf2c9f;",
        responseData,
      );
    }
  } catch (error) {
    console.error("请求错误:", error);
    throw error; // 抛出错误给调用方处理
  }
}

module.exports = {
  translateText,
  translationAcion,
};

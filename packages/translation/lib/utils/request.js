const axios = require("axios").default;
const { translationBase, TIMEOUT } = require("../core/config");

const ydDictInstance = axios.create({
  baseURL: translationBase.youdao.dict,
  timeout: TIMEOUT,
});

ydDictInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    console.log(err);
    return err;
  },
);

const bdSentenceInstance = axios.create({
  baseURL: translationBase.baidu.sentence,
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  },
});

bdSentenceInstance.interceptors.request.use((config) => {
  return config;
});

bdSentenceInstance.interceptors.response.use((res) => {
  return res.data;
});

module.exports = {
  ydDictInstance,
  bdSentenceInstance,
};

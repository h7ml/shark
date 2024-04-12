#!/usr/bin/env node

const { readFileSync } = require("node:fs");
const path = require("node:path");
const process = require("node:process");
// eslint-disable-next-line unused-imports/no-unused-vars
const projectRoot = path.resolve(__dirname, ".");
// Define raw escape codes for colors
const reset = "\x1B[0m";
const red = "\x1B[31m";
const green = "\x1B[32m";
const bgRedWhite = "\x1B[41m\x1B[37m";

const msgPath = path.resolve(".git/COMMIT_EDITMSG");
const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/;
const msg = readFileSync(msgPath, "utf-8").trim();

if (!commitRE.test(msg)) {
  console.log();
  console.error(
    `  ${bgRedWhite} ERROR ${reset} ${red}invalid commit message format.${reset}\n\n` +
      `${red}  不合法的 commit 消息格式，请使用正确的提交格式. 例如:\n\n` +
      `    ${green}feat: add disableRoot option${reset}\n` +
      `    ${green}fix(view): handle keep-alive with aborted navigations (close #28)${reset}\n\n` +
      `${red}  See https://www.conventionalcommits.org/zh-hans for more details.${reset}\n`,
  );
  process.exit(1);
}

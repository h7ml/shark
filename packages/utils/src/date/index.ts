import type { currentDateOpt, currentDateType, hmsType } from "./types";

// 获取当前是星期几
export function getCurrentWeek(prefix: string = "星期"): string {
  const days = ["日", "一", "二", "三", "四", "五", "六"];
  const today = new Date().getDay();
  return prefix + days[today];
}

// 获取指定日期月份的总天数
export function monthDays(time: Date | string): number {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return new Date(year, month, 0).getDate();
}

// 获取从当前年份到开始年份的数组
export function createYear(start: number): number[] {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= start; i--) years.push(i);

  return years;
}

export function getCurrentDate(options?: currentDateOpt): currentDateType {
  const { type = 1, prefix = "星期" } = options || {};
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  const week = prefix + "日一二三四五六"[now.getDay()];
  let ymd;
  switch (type) {
    case 2:
      ymd = `${year}-${month}-${day}`;
      break;
    case 3:
      ymd = `${year}/${month}/${day}`;
      break;
    default:
      ymd = `${year}年${month}月${day}日`;
  }
  const hms = `${hour}:${minute}:${second}`;
  return { ymd, hms, week };
}

// 获取格式化后的当前日期
export function dateFormat(format: string): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  return format
    .replace("YYYY", String(year))
    .replace("MM", month)
    .replace("DD", day)
    .replace("HH", hour)
    .replace("mm", minute)
    .replace("ss", second);
}

export function getTime(seconds: number, bool: boolean = true): hmsType {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return {
    h: bool ? String(h).padStart(2, "0") : h,
    m: bool ? String(m).padStart(2, "0") : m,
    s: bool ? String(s).padStart(2, "0") : s,
  };
}

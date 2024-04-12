export type dateType = 1 | 2 | 3;
export interface hmsType {
  h: number | string;
  m: number | string;
  s: number | string;
}

export interface currentDateType {
  ymd: string;
  hms: string;
  week: string;
}
export interface currentDateOpt {
  type?: dateType;
  prefix?: string;
}

export declare function getCurrentWeek(prefix?: string): string;
export declare function monthDays(time: Date | string): number;
export declare function createYear(start: number): number[];
export declare function getCurrentDate(
  options?: currentDateOpt,
): currentDateType;
export declare function dateFormat(format: string): string;
export declare function getTime(seconds: number, bool?: boolean): hmsType;

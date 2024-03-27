/**
 * 判断一个值是否为数组类型
 *
 * @param val 待判断的值
 * @returns 返回布尔值，表示该值是否为数组类型
 */
export function isArray(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Array]'
}

/**
 * 判断一个值是否为对象类型
 *
 * @param val 待判断的值
 * @returns 返回值为布尔类型，表示该值是否为对象类型
 */
export function isObject(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object Object]'
}

/**
 * 判断一个值是否为字符串类型
 *
 * @param val 待判断的值
 * @returns 如果值为字符串类型，则返回true；否则返回false
 */
export function isString(val: any): boolean {
  return Object.prototype.toString.call(val) === '[object String]'
}

export const isSSR = (function () {
  try {
    return !(typeof window !== 'undefined' && document !== undefined)
  }
  catch (e) {
    return true
  }
})()

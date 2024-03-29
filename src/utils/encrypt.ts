// 加密邮箱和手机号方法
export function encryptEmailOrPhone(value: string): string {
  // 确保 value 长度大于等于 8，否则不做处理
  if (value.length < 8)
    return value

  // 将字符串转换为数组方便操作
  const characters = value.split('')

  // 加密第四位到第八位的字符
  for (let i = 3; i < 8 && i < characters.length; i++) characters[i] = '*'

  // 返回加密后的字符串
  return characters.join('')
}

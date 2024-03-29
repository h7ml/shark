/**
 * 生成随机的十六进制颜色
 * @returns 一个随机的十六进制颜色字符串，例如 "#0f1a2b"
 */
export function randomHexColor(): string {
  const letters: string = "0123456789ABCDEF";
  let color: string = "#";
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];

  return color;
}

import type { Platform } from './types'

export function isCaseInsensitive(platform: Platform): boolean {
  return (
    platform === 'win32'
    || platform === 'darwin'
    || platform === 'freebsd'
    || platform === 'openbsd'
  )
}

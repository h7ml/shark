import { useMedia } from 'react-use'

export function usePCScreen() {
  const isPC = useMedia('(min-width: 1024px)')
  return isPC
}

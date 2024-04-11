import { useEffect } from 'react'
import { useGlobalStore } from '@/store/global'
import { t } from '@/utils'

function useTitle(title: string) {
  const { lang } = useGlobalStore()
  useEffect(() => {
    document.title = `${t('oxUHmmAd')}${title.length ? ` | ${t(title)}` : ''}`
  }, [title, lang])
}
export { useTitle }
export default useTitle

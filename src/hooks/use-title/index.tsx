import { t } from 'i18next'
import { useEffect } from 'react'
import { useGlobalStore } from '@/store/global'

function useTitle(title: string) {
  const { lang } = useGlobalStore()
  useEffect(() => {
    document.title = `Shark Data Visualization - 鲨鱼数据可视化${
      title.length ? ` | ${t(title)}` : ''
    }`
  }, [title, lang])
}
export { useTitle }
export default useTitle

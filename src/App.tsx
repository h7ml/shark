import '@/App.css'
import type { ThemeConfig } from 'antd'
import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import { darkTheme, lightTheme, sharkRouter } from '@/config/theme'
import { useGlobalStore } from '@/models/global'

import { i18n } from '@/utils/i18n'

function App() {
  const { darkMode, lang } = useGlobalStore()
  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  const curTheme: ThemeConfig = useMemo(
    () => (darkMode ? darkTheme : lightTheme),
    [darkMode],
  )

  return (
    <ConfigProvider theme={curTheme}>
      <RouterProvider router={sharkRouter} />
    </ConfigProvider>
  )
}

export default App

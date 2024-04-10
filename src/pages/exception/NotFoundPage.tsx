import { type FC, useEffect } from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { CloseCircleOutlined } from '@ant-design/icons'
import { i18n, t } from '@/utils'
import { useGlobalStore } from '@/store/global'
const NotFoundPage: FC = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // 返回上一页
  }

  const handleGoHome = () => {
    navigate('/') // 返回首页
  }
  const { lang } = useGlobalStore()
  useEffect(() => {
    const changeLanguage = async () => {
      await i18n.changeLanguage(lang)
    }
    changeLanguage()
  }, [lang])
  return (
    <Result
      status="404"
      title="404"
      subTitle={t('zvYCCdiI') + t('VMQdldGM')}
      icon={<CloseCircleOutlined />}
      extra={[
        <Button type="primary" key="back" onClick={handleGoBack}>
          {t('nWeztsqz')}
        </Button>,
        <Button key="home" onClick={handleGoHome}>
          {t('bJlOPeuE')}
        </Button>,
      ]}
    />
  )
}

export default NotFoundPage

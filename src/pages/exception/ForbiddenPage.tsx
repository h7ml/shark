import { type FC, useEffect } from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { WarningOutlined } from '@ant-design/icons'
import { i18n, t } from '@/utils'
import { useGlobalStore } from '@/store/global'

const ForbiddenPage: FC = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // 返回上一页
  }

  const handleGoHome = () => {
    navigate('/')
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
      status="403"
      title={`403${t('IHtHHFwM')}`}
      subTitle={t('JapstXpH') + t('syZUDjJA')}
      icon={<WarningOutlined />}
      extra={[
        <Button key="goBack" onClick={handleGoBack}>
          {t('nWeztsqz')}
        </Button>,
        <Button key="goHome" type="primary" onClick={handleGoHome}>
          {t('bJlOPeuE')}
        </Button>,
      ]}
    />
  )
}

export default ForbiddenPage

import type { FC } from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { WarningOutlined } from '@ant-design/icons'
import { t } from '@/utils'

const ForbiddenPage: FC = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // 返回上一页
  }

  const handleGoHome = () => {
    navigate('/')
  }

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

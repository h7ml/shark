import { t } from '@/utils'
import type { FC } from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { WarningOutlined } from '@ant-design/icons'

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
      title="403 Forbidden"
      subTitle="Sorry, you are not authorized to access this page."
      icon={<WarningOutlined />}
      extra={[
        <Button key="goBack" onClick={handleGoBack}>
          Go Back
        </Button>,
        <Button key="goHome" type="primary" onClick={handleGoHome}>
          Go Home
        </Button>,
      ]}
    />
  )
}

export default ForbiddenPage

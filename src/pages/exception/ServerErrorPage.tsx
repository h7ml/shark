import type { FC } from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { BugOutlined } from '@ant-design/icons'

const ServerErrorPage: FC = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // 返回上一页
  }

  const handleGoHome = () => {
    navigate('/') // 返回首页
  }

  return (
    <Result
      status="500"
      title="500 Internal Server Error"
      subTitle="Sorry, something went wrong with the server."
      icon={<BugOutlined />}
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

export default ServerErrorPage

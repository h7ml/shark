import { Spin, Tabs, message } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  AppstoreOutlined,
  EyeOutlined,
  GoogleOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
  SoundOutlined,
  UserOutlined,
} from '@ant-design/icons' // 导入所需图标
import {
  AccountBindingForm,
  BasicSettingsForm,
  NotificationSettingsForm,
  OtherSettingsForm,
  PrivacySettingsForm,
  SecurityQuestionsForm,
  SecuritySettingsForm,
  SocialAccountsForm,
} from './components'
import type { BasicSettingsFormProps } from './components/BasicSettingsForm'

function SettingsPage() {
  const [data, setData] = useState<BasicSettingsFormProps['initialValues']>({})
  const [loading, setLoading] = useState(true)
  const [tabPosition, setTabPosition] = useState<'left' | 'top'>('left')

  const fetchUser = async () => {
    setLoading(true)
    try {
      const response = await axios('/api/user/userInfo')
      const data = await response.data
      setData(data)
    }
    catch (error: any) {
      message.error(`Error fetching data: ${error}`)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
    const handleResize = () => {
      // 根据视口宽度修改tabPosition
      if (window.innerWidth <= 768)
        setTabPosition('top')
      else setTabPosition('left')
    }
    // 初始设置一次
    handleResize()
    // 监听窗口变化
    window.addEventListener('resize', handleResize)
    // 清理函数
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Spin spinning={loading}>
      <Tabs
        tabPosition={tabPosition}
        items={[
          {
            key: 'basic',
            label: `基本设置`,
            icon: <UserOutlined />,
            children: <BasicSettingsForm initialValues={data} />,
          },
          {
            key: 'security',
            label: `安全设置`,
            icon: <LockOutlined />,
            children: <SecuritySettingsForm initialValues={data} />,
          },
          {
            key: 'account',
            label: `账号绑定`,
            icon: <GoogleOutlined />,
            children: <AccountBindingForm />,
          },
          {
            key: 'notification',
            label: `新消息通知`,
            icon: <SoundOutlined />,
            children: <NotificationSettingsForm />,
          },
          {
            key: 'privacy',
            label: `隐私设置`,
            icon: <EyeOutlined />,
            children: <PrivacySettingsForm />,
          },
          {
            key: 'Security',
            label: `密保设置`,
            icon: <SafetyCertificateOutlined />,
            children: (
              <SecurityQuestionsForm
                initialValues={{
                  securityQuestion: '您的生日是？',
                  securityAnswer: '1990-01-01',
                }}
              />
            ),
          },
          {
            key: 'social',
            label: `社交账号`,
            icon: <AppstoreOutlined />,
            children: <SocialAccountsForm />,
          },
          {
            key: 'other',
            label: `其他设置`,
            icon: <SettingOutlined />,
            children: <OtherSettingsForm />,
          },
        ]}
      />
    </Spin>
  )
}

export default SettingsPage

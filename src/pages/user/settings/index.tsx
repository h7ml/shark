import { Spin, Tabs, message } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
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

  const fetchUser = async () => {
    setLoading(true)
    try {
      const response = await axios('/api/user/userInfo')
      const data = await response.data
      setData(data)
    }
    catch (error: string | any) {
      message.error('Error fetching data:', error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <Spin spinning={loading}>
      {' '}
      {/* 使用Spin组件包裹Tabs，根据loading状态来显示或隐藏Spin */}
      <Tabs
        tabPosition="left"
        items={[
          {
            key: 'basic',
            label: `基本设置`,
            children: <BasicSettingsForm initialValues={data} />,
          },
          {
            key: 'security',
            label: `安全设置`,
            children: <SecuritySettingsForm initialValues={data} />,
          },
          {
            key: 'account',
            label: `账号绑定`,
            children: <AccountBindingForm />,
          },
          {
            key: 'notification',
            label: `新消息通知`,
            children: <NotificationSettingsForm />,
          },
          {
            key: 'privacy',
            label: `隐私设置`,
            children: <PrivacySettingsForm />,
          },
          {
            key: 'Security',
            label: `密保设置`,
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
            children: <SocialAccountsForm />,
          },
          {
            key: 'other',
            label: `其他设置`,
            children: <OtherSettingsForm />,
          },
        ]}
      />
    </Spin>
  )
}

export default SettingsPage

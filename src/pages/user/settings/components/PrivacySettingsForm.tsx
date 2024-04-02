import {
  EnvironmentOutlined,
  EyeOutlined,
  MessageOutlined,
} from '@ant-design/icons'
import { List, Switch, message } from 'antd'
import type { FC } from 'react'
import { t } from '@/utils'

const PrivacySettingsForm: FC = () => {
  const handleSwitchChange = (label: string, checked: boolean) => {
    // 处理开关变化
    console.log(`${label}switch checked:${checked}`)
    // 假设这里是发送更新请求的逻辑
    // 在这里展示一个消息提示框，表示更新成功
    message.success(label + t('HMaQZhGm'))
  }

  const privacySettings = [
    {
      label: t('kqUohMSE'),
      description: t('iOsdcNRA'),
      icon: <EyeOutlined />,
    },
    {
      label: t('qIfUlseW'),
      description: t('QbeIQyEh'),
      icon: <MessageOutlined />,
    },
    {
      label: t('nNurrMVz'),
      description: t('bZFyJMPL'),
      icon: <EnvironmentOutlined />,
    },
  ]

  return (
    <List
      dataSource={privacySettings}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<MessageOutlined />}
            title={item.label}
            description={item.description}
          />
          <Switch
            onChange={checked => handleSwitchChange(item.label, checked)}
          />
        </List.Item>
      )}
    />
  )
}

export default PrivacySettingsForm

import { t } from '@/utils'
import {
  EnvironmentOutlined,
  EyeOutlined,
  MessageOutlined,
} from '@ant-design/icons'
import { List, Switch, message } from 'antd'

const PrivacySettingsForm: FC = () => {
  const handleSwitchChange = (label: string, checked: boolean) => {
    // 处理开关变化
    console.log(`${label} switch checked: ${checked}`)
    // 假设这里是发送更新请求的逻辑
    // 在这里展示一个消息提示框，表示更新成功
    message.success(`${label}设置已更新`)
  }

  const privacySettings = [
    {
      label: '个人资料可见性',
      description: '其他用户可以查看我的个人资料',
      icon: <EyeOutlined />,
    },
    {
      label: '消息接收权限',
      description: '允许其他用户向我发送消息',
      icon: <MessageOutlined />,
    },
    {
      label: '位置信息分享',
      description: '允许共享我的位置信息',
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

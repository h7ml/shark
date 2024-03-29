import { List, Switch, message } from 'antd'
import { FileDoneOutlined, NotificationOutlined } from '@ant-design/icons'
import type { FC } from 'react'

const OtherSettingsForm: FC = () => {
  const handleSwitchChange = (checked: boolean) => {
    // 处理开关状态变化
    console.log('开关状态变化：', checked)
    message.success(checked ? '功能已启用' : '功能已关闭')
  }

  // const handleSave = () => {
  //   // 处理保存设置操作
  //   message.success('设置已保存')
  // }

  const settings = [
    {
      label: '自动保存草稿',
      icon: <FileDoneOutlined />,
      switchName: 'autoSave',
    },
    {
      label: '接收推送通知',
      icon: <NotificationOutlined />,
      switchName: 'pushNotification',
    },
  ]

  return (
    <List
      itemLayout="horizontal"
      dataSource={settings}
      renderItem={item => (
        <List.Item
          actions={[
            <Switch key={item.switchName} onChange={handleSwitchChange} />,
          ]}
        >
          <List.Item.Meta title={item.label} avatar={item.icon} />
        </List.Item>
      )}
    />
  )
}

export default OtherSettingsForm

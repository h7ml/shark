import { FileDoneOutlined, NotificationOutlined } from '@ant-design/icons'
import { List, Switch, message } from 'antd'
import type { FC } from 'react'
import { t } from '@/utils'

const OtherSettingsForm: FC = () => {
  const handleSwitchChange = (checked: boolean) => {
    // 处理开关状态变化
    console.log(t('rTBudEaE'), checked)
    message.success(checked ? t('FphnGMoe') : t('SEpzlmTu'))
  }

  // const handleSave = () => {
  //   // 处理保存设置操作
  //   message.success(t('dRiZCVUP'))
  // }

  const settings = [
    {
      label: t('ISgGbAfg'),
      icon: <FileDoneOutlined />,
      switchName: 'autoSave',
    },
    {
      label: t('YtxCurUj'),
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

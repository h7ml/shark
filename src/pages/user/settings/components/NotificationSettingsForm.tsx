import { MessageOutlined } from '@ant-design/icons'
import { List, Switch, message } from 'antd'
import type { FC } from 'react'
import React from 'react'
import { t } from '@/utils'

const NotificationSettingsForm: FC = () => {
  const handleSwitchChange = (label: string, checked: boolean) => {
    // 处理 Switch 开关变化
    if (checked)
      message.success(label + t('UBaaIhRz'))
    else message.warning(label + t('zxKapmMZ'))
  }

  const notificationSettings = [
    {
      label: t('NgurvQpF'),
      description: t('vhffWciQ'),
    },
    {
      label: t('aUYbuxNo'),
      description: t('QbMgaoIl'),
    },
    {
      label: t('kogXAMJe'),
      description: t('oCyIgtAK'),
    },
  ]

  return (
    <List
      dataSource={notificationSettings}
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

export default NotificationSettingsForm

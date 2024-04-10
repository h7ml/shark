import {
  AlipayCircleOutlined,
  DingdingOutlined,
  TaobaoCircleOutlined,
} from '@ant-design/icons'
import { Button, List, message } from 'antd'
import type { FC } from 'react'
import { t } from '@/utils'

const AccountBindingForm: FC = () => {
  const handleBinding = (type: string) => {
    // 处理绑定操作
    message.info(t('SgVWDhMx') + type)
  }

  const accountBindings = [
    {
      label: t('XhPgzZQz'),
      description: t('SIRRAXfv'),
      actionText: t('xPHnIQKB'),
      icon: <TaobaoCircleOutlined />,
      onClick: () => handleBinding(t('XhPgzZQz')),
    },
    {
      label: t('RipNIbTf'),
      description: t('QrQOyTVU'),
      actionText: t('xPHnIQKB'),
      icon: <AlipayCircleOutlined />,
      onClick: () => handleBinding(t('RipNIbTf')),
    },
    {
      label: t('qWdQvZAh'),
      description: t('GjPQtzZg'),
      actionText: t('xPHnIQKB'),
      icon: <DingdingOutlined />,
      onClick: () => handleBinding(t('qWdQvZAh')),
    },
  ]

  return (
    <List
      dataSource={accountBindings}
      renderItem={item => (
        <List.Item
          actions={[
            <Button
              type="primary"
              icon={item.icon}
              onClick={item.onClick}
              key={item.label}
            >
              {item.actionText}
            </Button>,
          ]}
        >
          <List.Item.Meta
            title={item.label}
            description={item.description}
            avatar={item.icon}
          />
        </List.Item>
      )}
    />
  )
}

export default AccountBindingForm

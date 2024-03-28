import { Button, List, message } from 'antd'
import {
  AlipayCircleOutlined,
  DingdingOutlined,
  TaobaoCircleOutlined,
} from '@ant-design/icons'
import type { FC } from 'react'

const AccountBindingForm: FC = () => {
  const handleBinding = (type: string) => {
    // 处理绑定操作
    message.info(`开始绑定${type}`)
  }

  const accountBindings = [
    {
      label: '淘宝',
      description: '当前未绑定淘宝账号',
      actionText: '绑定',
      icon: <TaobaoCircleOutlined />,
      onClick: () => handleBinding('淘宝'),
    },
    {
      label: '支付宝',
      description: '当前未绑定支付宝账号',
      actionText: '绑定',
      icon: <AlipayCircleOutlined />,
      onClick: () => handleBinding('支付宝'),
    },
    {
      label: '钉钉',
      description: '当前未绑定钉钉账号',
      actionText: '绑定',
      icon: <DingdingOutlined />,
      onClick: () => handleBinding('钉钉'),
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

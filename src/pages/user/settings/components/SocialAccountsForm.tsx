import { Button, List, message } from 'antd'
import { QqOutlined, WechatOutlined, WeiboOutlined } from '@ant-design/icons'
import type { FC } from 'react'

const SocialAccountsForm: FC = () => {
  const handleBind = (accountType: string) => {
    // 处理绑定社交账号操作
    message.info(`开始绑定${accountType}`)
  }

  const handleUnbind = (accountType: string) => {
    // 处理解绑社交账号操作
    message.info(`开始解绑${accountType}`)
  }

  const socialAccounts = [
    {
      label: '微信',
      description: '当前未绑定微信账号',
      bindActionText: '绑定',
      bindOnClick: () => handleBind('微信'),
      unbindActionText: '解绑',
      unbindOnClick: () => handleUnbind('微信'),
      icon: <WechatOutlined />,
    },
    {
      label: '微博',
      description: '当前未绑定微博账号',
      bindActionText: '绑定',
      bindOnClick: () => handleBind('微博'),
      unbindActionText: '解绑',
      unbindOnClick: () => handleUnbind('微博'),
      icon: <WeiboOutlined />,
    },
    {
      label: 'QQ',
      description: '当前未绑定QQ账号',
      bindActionText: '绑定',
      bindOnClick: () => handleBind('QQ'),
      unbindActionText: '解绑',
      unbindOnClick: () => handleUnbind('QQ'),
      icon: <QqOutlined />,
    },
  ]

  return (
    <List
      dataSource={socialAccounts}
      renderItem={item => (
        <List.Item
          actions={[
            <Button
              key={item.label}
              type="primary"
              icon={item.icon}
              onClick={item.unbindOnClick}
            >
              {item.bindActionText}
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

export default SocialAccountsForm

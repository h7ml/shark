import { QqOutlined, WechatOutlined, WeiboOutlined } from '@ant-design/icons'
import { Button, List, message } from 'antd'
import type { FC } from 'react'
import { t } from '@/utils'

const SocialAccountsForm: FC = () => {
  const handleBind = (accountType: string) => {
    // 处理绑定社交账号操作
    message.info(t('SgVWDhMx') + accountType)
  }

  const handleUnbind = (accountType: string) => {
    // 处理解绑社交账号操作
    message.info(t('PxMuznqD') + accountType)
  }

  const socialAccounts = [
    {
      label: t('XSSuwAHE'),
      description: t('nIogWQHm'),
      bindActionText: t('xPHnIQKB'),
      bindOnClick: () => handleBind(t('XSSuwAHE')),
      unbindActionText: t('CNsvKxfN'),
      unbindOnClick: () => handleUnbind(t('XSSuwAHE')),
      icon: <WechatOutlined />,
    },
    {
      label: t('jPDlVQkL'),
      description: t('mKAhwTQX'),
      bindActionText: t('xPHnIQKB'),
      bindOnClick: () => handleBind(t('jPDlVQkL')),
      unbindActionText: t('CNsvKxfN'),
      unbindOnClick: () => handleUnbind(t('jPDlVQkL')),
      icon: <WeiboOutlined />,
    },
    {
      label: 'QQ',
      description: `${t('HAUaYkwY')}QQ${t('RNISycbR')}`,
      bindActionText: t('xPHnIQKB'),
      bindOnClick: () => handleBind('QQ'),
      unbindActionText: t('CNsvKxfN'),
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

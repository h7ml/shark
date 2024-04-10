import {
  LockOutlined,
  MailOutlined,
  MobileOutlined,
  SafetyOutlined,
} from '@ant-design/icons'
import { Button, List, Skeleton, message } from 'antd'
import type { FC } from 'react'
import { t } from '@/utils'

import { encryptEmailOrPhone } from '@/utils/encrypt'

export interface SecurityQuestionsFormProps {
  initialValues: {
    email: string
    phone: string
  }
}

const SecuritySettingsForm: FC<SecurityQuestionsFormProps> = ({
  initialValues,
}) => {
  const handleModify = (type: string) => {
    // 处理修改操作
    message.info(t('zfmpMsaW') + type)
  }

  const handleSet = (type: string) => {
    // 处理设置操作
    message.info(t('TOAgGNwI') + type)
  }

  const securitySettings = [
    {
      label: t('XDDygNKc'),
      description: `${t('MNBfnxHR')}:${t('UIxSANHe')}`,
      actionText: t('ZZpaYhHt'),
      icon: <LockOutlined />,
      onClick: () => handleModify(t('XDDygNKc')),
    },
    {
      label: t('wraFvpuy'),
      description: t('QXhSiVyQ') + encryptEmailOrPhone(initialValues.phone), // 加密手机号
      actionText: t('ZZpaYhHt'),
      icon: <MobileOutlined />,
      onClick: () => handleModify(t('wraFvpuy')),
    },
    {
      label: t('njXYEynU'),
      description: t('mDnminvj') + t('jZEEobGJ'),
      actionText: t('cwWPaHkH'),
      icon: <SafetyOutlined />,
      onClick: () => handleSet(t('njXYEynU')),
    },
    {
      label: t('xkzNUjws'),
      description: `${t('TWTeLLQt')}${encryptEmailOrPhone(initialValues?.email)}`, // 加密备用邮箱
      actionText: t('ZZpaYhHt'),
      icon: <MailOutlined />,
      onClick: () => handleModify(t('xkzNUjws')),
    },
    {
      label: `MFA ${t('EbxHIGls')}`,
      description: `${t('MMTXjiFW')} MFA ${t('EbxHIGls')}${t('HCZWSQxS')}${t('wcNrfzza')}`,
      actionText: t('xPHnIQKB'),
      icon: <SafetyOutlined />,
      onClick: () => handleSet(`MFA${t('EbxHIGls')}`),
    },
  ]

  return (
    <List
      dataSource={securitySettings}
      renderItem={item => (
        <List.Item
          key={item.label}
          actions={[
            <Button
              key={item.label}
              type="primary"
              onClick={item.onClick}
              icon={item.icon}
              className="ml-2"
            >
              {item.actionText}
            </Button>,
          ]}
        >
          <Skeleton title={false} loading={false} active>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.label}</a>}
              description={item.description}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  )
}

export default SecuritySettingsForm

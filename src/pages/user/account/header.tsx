import {
  HomeOutlined,
  SmileOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons/lib/icons'
import { Avatar, Space } from 'antd'
import type { FC, ReactElement } from 'react'

// 将背景图片URL定义为常量
const BACKGROUND_IMAGE_URL
  = 'https://lf-cdn-tos.bytescm.com/obj/static/arcodesign/proPreview/static/media/header-banner.fcb7b1aa6ce12d210c85.png'

interface IconTextPairProps {
  Icon: ReactElement
  text: string
  loading: boolean
}

const IconTextPair: FC<IconTextPairProps> = ({ Icon, text, loading }) => {
  // IconTextPair组件的实现
  return (
    <div>
      {Icon}
      <span>{text}</span>
      {loading && <span>Loading...</span>}
    </div>
  )
}

// UserInfoHeader 组件定义
export interface HeaderProps {
  userInfo: {
    name?: string
    avatar?: string
    jobName?: string
    organizationName?: string
    locationName?: string
  }
  loading: boolean
}

const UserInfoHeader: FC<HeaderProps> = ({ userInfo = {}, loading }) => {
  return (
    <div
      className="bg-cover bg-center h-200px w-full"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
        backgroundSize: '100%',
        height: '200px',
      }}
    >
      <Space
        size={8}
        direction="vertical"
        align="center"
        className="justify-center flex items-center p-30px"
      >
        <Avatar size={64} src={userInfo.avatar}>
          {/* 使用安全的img src属性 */}
        </Avatar>
        <div>{!loading && userInfo.name}</div>
        <div>
          <Space size={18}>
            <IconTextPair
              Icon={<UserDeleteOutlined />}
              text={userInfo.jobName ?? ''}
              loading={loading}
            />
            <IconTextPair
              Icon={<HomeOutlined />}
              text={userInfo.organizationName ?? ''}
              loading={loading}
            />
            <IconTextPair
              Icon={<SmileOutlined />}
              text={userInfo.locationName ?? ''}
              loading={loading}
            />
          </Space>
        </div>
      </Space>
    </div>
  )
}

export default UserInfoHeader

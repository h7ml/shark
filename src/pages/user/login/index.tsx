import {
  GithubOutlined,
  LockOutlined,
  MobileOutlined,
  SafetyOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {
  LoginFormPage,
  ProConfigProvider,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components'
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Space,
  Tabs,
  message,
  theme,
} from 'antd'
import axios from 'axios'
import type { CSSProperties, FC } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Shark from '@/assets/icons/shark.svg'
import { useStorage } from '@/hooks'
import { t } from '@/utils'
import { IconGitee } from '@/assets/icons/gitee'

type LoginType = 'phone' | 'account'

const iconStyles: CSSProperties = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle',
  cursor: 'pointer',
}

interface DataType {
  code?: string
  imageBase64?: string
}

interface LoginDTO {
  username: string
  password: string
  captcha?: string
}

type AuthType = 'github' | 'gitee'
const Page: FC = () => {
  const navigate = useNavigate()
  const { token } = theme.useToken()
  const [data, setData] = useState<DataType>({})
  const { setData: setUser } = useStorage('userName')

  // 时间戳
  const timestamp = Date.now()
  const refreshCaptcha = (timestamp: number) => {
    axios
      .post('/api/auth/captcha', {
        timestamp,
      })
      .then((json) => {
        setData(json.data)
      })
      .catch((error: any) => {
        console.log('fetch data failed', error)
      })
  }

  useEffect(() => {
    refreshCaptcha(timestamp)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [loginType, setLoginType] = useState<LoginType>('account')
  const onFinish = async (values: LoginDTO) => {
    if (!values.captcha || !values.username)
      return
    if (values.captcha.toLowerCase() !== data.code?.toLowerCase()) {
      message.error(t('PsXEMkqN'))
      return
    }
    setUser('userName', values.username)
    navigate('/')
  }

  const getIconStyle = (color: string): CSSProperties => ({
    ...iconStyles,
    color,
  })

  const renderLoginMethod = () => {
    if (loginType === 'account') {
      return (
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: (
                <UserOutlined
                  style={{
                    color: token.colorText,
                  }}
                  className="prefixIcon"
                />
              ),
            }}
            placeholder="admin or user"
            initialValue="admin"
            rules={[
              {
                required: true,
                message: t('yaItPdgK'),
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: (
                <LockOutlined
                  style={{
                    color: token.colorText,
                  }}
                  className="prefixIcon"
                />
              ),
            }}
            placeholder={`${t('HplkKxdY' /* 密码 */)}: ant.design`}
            initialValue="ant.design"
            rules={[
              {
                required: true,
                message: t('DjMcEMAe'),
              },
            ]}
          />
          <Form.Item
            key={data?.code}
            name="captcha"
            rules={[
              {
                required: true,
                message: t('AiCRsRRY'),
                max: 4,
              },
            ]}
          >
            <Input
              maxLength={4}
              prefix={<SafetyOutlined className="text-[20px]" />}
              placeholder={t('YMLfCXFK')}
              suffix={(
                <img
                  className="cursor-pointer"
                  src={data?.imageBase64}
                  onClick={() => {
                    refreshCaptcha(Date.now())
                  }}
                />
              )}
            />
          </Form.Item>
        </>
      )
    }
    else if (loginType === 'phone') {
      return (
        <>
          <ProFormText
            fieldProps={{
              size: 'large',
              prefix: (
                <MobileOutlined
                  style={{
                    color: token.colorText,
                  }}
                  className="prefixIcon"
                />
              ),
            }}
            name="mobile"
            placeholder={t('reRQcmnZ')}
            rules={[
              {
                required: true,
                message: t('JuLbycyD'),
              },
              {
                pattern: /^1\d{10}$/,
                message: t('lpFRkXwM'),
              },
            ]}
          />
          <ProFormCaptcha
            fieldProps={{
              size: 'large',
              prefix: (
                <LockOutlined
                  style={{
                    color: token.colorText,
                  }}
                  className="prefixIcon"
                />
              ),
            }}
            captchaProps={{
              size: 'large',
            }}
            placeholder={t('AiCRsRRY')}
            captchaTextRender={(timing, count) => {
              if (timing)
                return `${count} ${t('sekEcgEb')}`

              return t('sekEcgEb')
            }}
            name="captcha"
            rules={[
              {
                required: true,
                message: t('AiCRsRRY'),
              },
            ]}
            onGetCaptcha={async () => {
              const messageText = `${t('gTqSmcGA') + t('PxwlwFAw')}1234`
              message.success(messageText)
            }}
          />
        </>
      )
    }
    return null
  }

  const handleAuth = (type: AuthType) => {
    const redirect_uri = encodeURIComponent('https://shark.h7ml.cn')

    const AuthUrl = {
      gitee: `https://gitee.com/oauth/authorize?client_id=28a98fa051266a304805ab7f8c562475136e6b0fab1bd61d0c5bdf6349a830fd&redirect_uri=${redirect_uri}&response_type=code`,
      github:
        'https://github.com/login/oauth/authorize?client_id=2a315440d44092e42065&redirect_uri=https://shark.h7ml.cn&scope=user&state=75223d30d27f03a5565103f5f87a00d7bde18664',
    }
    window.open(AuthUrl[type], '_blank') //
  }

  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh',
      }}
    >
      {/* https://pro-components.antdigital.dev/components/login-form#%E9%A1%B5%E9%9D%A2%E7%BA%A7%E5%88%AB%E7%9A%84%E7%99%BB%E5%BD%95%E8%A1%A8%E5%8D%95 */}
      <LoginFormPage
        backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
        logo={Shark}
        backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
        title="shark"
        onFinish={onFinish}
        containerStyle={{
          backgroundColor: 'rgba(0, 0, 0,0.65)',
          backdropFilter: 'blur(4px)',
        }}
        subTitle={t(
          'wbTMzvDM' /* 一个用于管理和可视化鲨鱼数据的 Web 应用程序 */,
        )}
        activityConfig={{
          style: {
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
            color: token.colorTextHeading,
            borderRadius: 8,
            backgroundColor: 'rgba(255,255,255,0.25)',
            backdropFilter: 'blur(4px)',
          },
          title: 'Shark Data App',
          subTitle: 'A web application for managing and visualizing shark data',
          action: (
            <Button
              type="primary"
              onClick={() => {
                window.open('https://github.com/h7ml/shark')
              }}
              size="large"
              style={{
                borderRadius: 20,
                background: token.colorBgElevated,
                color: token.colorPrimary,
                width: 120,
              }}
            >
              Github
            </Button>
          ),
        }}
        actions={(
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Divider plain>
              <span
                style={{
                  color: token.colorTextPlaceholder,
                  fontWeight: 'normal',
                  fontSize: 14,
                }}
              >
                {t('ZuFSBNBR')}
              </span>
            </Divider>
            <Space align="center" size={24}>
              <Col
                onClick={() => {
                  handleAuth('gitee')
                }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 40,
                  width: 40,
                  border: `1px solid ${token.colorPrimaryBorder}`,
                  borderRadius: '50%',
                }}
              >
                <IconGitee style={getIconStyle('#1677FF')} />
              </Col>
              <Col
                onClick={() => {
                  handleAuth('github')
                }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 40,
                  width: 40,
                  border: `1px solid ${token.colorPrimaryBorder}`,
                  borderRadius: '50%',
                }}
              >
                <GithubOutlined style={{ ...iconStyles, color: '#FF6A10' }} />
              </Col>
            </Space>
          </div>
        )}
      >
        <Tabs
          items={[
            {
              label: t('qPkNCnDl'),
              key: 'account',
              icon: <UserOutlined />,
            },
            {
              key: 'phone',
              icon: <MobileOutlined />,
              label: t('jJIiZmVN'),
            },
          ]}
          centered
          activeKey={loginType}
          onChange={activeKey => setLoginType(activeKey as LoginType)}
        >
        </Tabs>

        {renderLoginMethod()}
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            {t('jppgmQsa')}
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            {t('tCJkfSMg')}
          </a>
        </div>
      </LoginFormPage>
    </div>
  )
}

function loginPage() {
  return (
    <ProConfigProvider dark>
      <Page />
    </ProConfigProvider>
  )
}
export default loginPage

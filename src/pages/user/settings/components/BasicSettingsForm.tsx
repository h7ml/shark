import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Form, Input, Select, message } from 'antd'
import type { FC } from 'react'
import { createRef, useEffect, useState } from 'react'
import { t } from '@/utils'

const { Option } = Select

export interface BasicSettingsFormProps {
  initialValues: {
    email: string
    name: string
    bio: string
    country: string
    province: string
    address: string
    phone: string
  }
}

const BasicSettingsForm: FC<BasicSettingsFormProps> = ({ initialValues }) => {
  const [windowSize, setWindowSize] = useState<{
    innerHeight: number
    innerWidth: number
  }>({ innerHeight: window.innerHeight, innerWidth: window.innerWidth })

  // 获取当前窗口大小
  const getWindowSize = () => ({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  })

  // 定义默认布局
  const [layout, setLayout] = useState<'horizontal' | 'vertical'>('horizontal')
  const formLayout = {
    labelCol: {
      xs: { span: 3 },
      sm: { span: 4 },
      xl: { span: 3 },
      xxl: { span: 1 },
    },
    wrapperCol: {
      xs: { span: 20 },
      sm: { span: 20 },
      xl: { span: 20 },
      xxl: { span: 24 },
    },
  }

  // 监听窗口变化
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = () => {
    setWindowSize(getWindowSize())
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  // useEffect改变布局
  useEffect(() => {
    if (windowSize.innerWidth < 1444)
      setLayout('vertical')
    else setLayout('horizontal')
  }, [windowSize])

  const formref = createRef<any>()

  const handleUpdate = (values: any) => {
    console.log(t('hnZlncWV'), values)
    message.success(t('NKuxNtiN'))
  }

  useEffect(() => {
    formref.current?.setFieldsValue(initialValues)
  }, [initialValues, formref])

  return (
    <Form
      layout={layout}
      {...formLayout}
      name="basic"
      initialValues={initialValues}
      ref={formref}
      onFinish={handleUpdate}
    >
      <Form.Item label={t('SNAGFLKG')} name="email">
        <Input prefix={<MailOutlined />} />
      </Form.Item>

      <Form.Item label={t('zftzxIbQ')} name="name">
        <Input prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item label={t('evHCncJl')} name="bio">
        <Input.TextArea />
      </Form.Item>

      <Form.Item label={t('cBceotBD') + t('ayJmpoqD')} name="country">
        <Select>
          <Option value="china">{t('vGmQmAMk')}</Option>
          <Option value="usa">{t('XGgjnViF')}</Option>
          <Option value="uk">{t('TsbWmGuB')}</Option>
        </Select>
      </Form.Item>

      <Form.Item label={t('XEqazrEB')} name="province">
        <Select>
          <Option value="hangzhou">{t('eOUPbcki')}</Option>
          <Option value="beijing">{t('tltsmvNI')}</Option>
          <Option value="shanghai">{t('sKbUhUHI')}</Option>
        </Select>
      </Form.Item>

      <Form.Item label={t('oenWOwMj')} name="address">
        <Input prefix={<EnvironmentOutlined />} />
      </Form.Item>

      <Form.Item label={t('gOmjGYWq')} name="phone">
        <Input prefix={<PhoneOutlined />} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
        <Button type="primary" htmlType="submit">
          {t('RHLEUfmJ')}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default BasicSettingsForm

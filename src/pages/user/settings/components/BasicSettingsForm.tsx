import { Button, Form, Input, Select, message } from 'antd'
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { FC } from 'react'
import { createRef, useEffect, useState } from 'react'

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
    console.log('更新的基本信息：', values)
    message.success('基本信息更新成功')
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
      {/* 邮箱 */}
      <Form.Item label="邮箱" name="email">
        <Input prefix={<MailOutlined />} />
      </Form.Item>

      {/* 昵称 */}
      <Form.Item label="昵称" name="name">
        <Input prefix={<UserOutlined />} />
      </Form.Item>

      {/* 个人简介 */}
      <Form.Item label="个人简介" name="bio">
        <Input.TextArea />
      </Form.Item>

      {/* 国家/地区 */}
      <Form.Item label="国家/地区" name="country">
        <Select>
          <Option value="china">中国</Option>
          <Option value="usa">美国</Option>
          <Option value="uk">英国</Option>
        </Select>
      </Form.Item>

      {/* 所在省市 */}
      <Form.Item label="所在省市" name="province">
        <Select>
          <Option value="hangzhou">杭州</Option>
          <Option value="beijing">北京</Option>
          <Option value="shanghai">上海</Option>
        </Select>
      </Form.Item>

      {/* 街道地址 */}
      <Form.Item label="街道地址" name="address">
        <Input prefix={<EnvironmentOutlined />} />
      </Form.Item>

      {/* 联系电话 */}
      <Form.Item label="联系电话" name="phone">
        <Input prefix={<PhoneOutlined />} />
      </Form.Item>

      {/* 更新按钮 */}
      <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
        <Button type="primary" htmlType="submit">
          更新基本信息
        </Button>
      </Form.Item>
    </Form>
  )
}

export default BasicSettingsForm

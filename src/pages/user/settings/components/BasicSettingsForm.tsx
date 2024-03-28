import { Button, Form, Input, Select, message } from 'antd'
import type { FC } from 'react'
import { createRef, useEffect } from 'react'
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons'

const { Option } = Select

export interface BasicSettingsFormProps {
  initialValues: {
    email: string
    name?: string
    bio?: string
    country?: string
    province?: string
    address?: string
    phone: string
  }
}

const BasicSettingsForm: FC<BasicSettingsFormProps> = ({ initialValues }) => {
  // 表单布局
  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 12 },
  }

  const formref = createRef<any>()

  const handleUpdate = (values: any) => {
    // 模拟更新数据的操作，这里可以替换成实际的更新数据逻辑
    console.log('更新的基本信息：', values)
    // 弹出更新成功的提示
    message.success('基本信息更新成功')
  }

  useEffect(() => {
    formref.current.setFieldsValue(initialValues)
  }, [initialValues])

  return (
    <Form
      {...layout}
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

import { LockOutlined, SafetyCertificateOutlined } from "@ant-design/icons"; // 导入所需图标
import { Button, Form, Input, message } from "antd";
import type { FC } from "react";
import { createRef, useEffect } from "react";

export interface SecurityQuestionsFormProps {
  initialValues: {
    securityQuestion: string;
    securityAnswer: string;
  };
}

const SecurityQuestionsForm: FC<SecurityQuestionsFormProps> = ({
  initialValues,
}) => {
  const securityRef = createRef<any>();

  useEffect(() => {
    securityRef.current.setFieldsValue({ ...initialValues });
  }, [securityRef, initialValues]);
  const handleSubmit = (values: any) => {
    // 提交表单逻辑
    console.log("提交的密保问题和答案：", values);
    // 模拟提交成功，并展示成功消息
    message.success("密保问题设置成功");
  };

  return (
    <Form
      ref={securityRef}
      name="Security"
      initialValues={initialValues}
      onFinish={handleSubmit}
      labelCol={{
        xs: { span: 3 },
        sm: { span: 4 },
        xl: { span: 3 },
        xxl: { span: 1 },
      }}
      wrapperCol={{
        xs: {
          span: 18,
        },
        sm: { span: 16 },
        xl: { span: 18 },
        xxl: { span: 24 },
      }}
    >
      <Form.Item
        label="密保问题"
        name="securityQuestion"
        rules={[{ required: true, message: "请输入密保问题" }]}
      >
        <Input placeholder="请输入您的密保问题" prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item
        label="密保答案"
        name="securityAnswer"
        rules={[{ required: true, message: "请输入密保答案" }]}
      >
        <Input
          placeholder="请输入您的密保答案"
          prefix={<SafetyCertificateOutlined />}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 3, span: 12 }}>
        <Button type="primary" htmlType="submit">
          设置密保问题
        </Button>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 3, span: 12 }}>
        <p style={{ color: "rgba(0, 0, 0, 0.45)" }}>
          提示：设置密保问题可以帮助您更好地保护账户安全，请确保密保问题和答案的准确性和私密性。
        </p>
      </Form.Item>
    </Form>
  );
};

export default SecurityQuestionsForm;

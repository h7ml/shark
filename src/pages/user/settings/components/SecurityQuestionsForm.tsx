import { LockOutlined, SafetyCertificateOutlined } from "@ant-design/icons"; // 导入所需图标
import { Button, Form, Input, message } from "antd";
import type { FC } from "react";
import { createRef, useEffect } from "react";
import { t } from "@/utils";

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
    console.log(t("yWbuIGhz"), values);
    // 模拟提交成功，并展示成功消息
    message.success(t("BlRirpwH"));
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
        label={t("njXYEynU")}
        name="securityQuestion"
        rules={[{ required: true, message: t("KUMIJekk") }]}
      >
        <Input placeholder={t("bbIbHVwd")} prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item
        label={t("cvYvFokH")}
        name="securityAnswer"
        rules={[{ required: true, message: t("nCPRMVhR") }]}
      >
        <Input
          placeholder={t("cfwLcPPd")}
          prefix={<SafetyCertificateOutlined />}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 3, span: 12 }}>
        <Button type="primary" htmlType="submit">
          {t("ESAyGyrI")}
        </Button>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 3, span: 12 }}>
        <p style={{ color: "rgba(0, 0, 0, 0.45)" }}>
          {t("ESAyGyrdVQjPFAxI")}：{t("ESAyGyrI")}+{t("gdkwwWni")}，
          {t("DriXrcRa")}。
        </p>
      </Form.Item>
    </Form>
  );
};

export default SecurityQuestionsForm;

import { Button, List, Skeleton, message } from "antd";
import {
  LockOutlined,
  MailOutlined,
  MobileOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import type { FC } from "react";
import { encryptEmailOrPhone } from "@/utils/encrypt";

export interface SecurityQuestionsFormProps {
  initialValues: {
    email: string;
    phone: string;
  };
}

const SecuritySettingsForm: FC<SecurityQuestionsFormProps> = ({
  initialValues,
}) => {
  const handleModify = (type: string) => {
    // 处理修改操作
    message.info(`开始修改${type}`);
  };

  const handleSet = (type: string) => {
    // 处理设置操作
    message.info(`开始设置${type}`);
  };

  const securitySettings = [
    {
      label: "账户密码",
      description: "当前密码强度：强",
      actionText: "修改",
      icon: <LockOutlined />,
      onClick: () => handleModify("账户密码"),
    },
    {
      label: "密保手机",
      description: `已绑定手机：${encryptEmailOrPhone(initialValues.phone)}`, // 加密手机号
      actionText: "修改",
      icon: <MobileOutlined />,
      onClick: () => handleModify("密保手机"),
    },
    {
      label: "密保问题",
      description: "未设置密保问题，密保问题可有效保护账户安全",
      actionText: "设置",
      icon: <SafetyOutlined />,
      onClick: () => handleSet("密保问题"),
    },
    {
      label: "备用邮箱",
      description: `已绑定邮箱：${encryptEmailOrPhone(initialValues?.email)}`, // 加密备用邮箱
      actionText: "修改",
      icon: <MailOutlined />,
      onClick: () => handleModify("备用邮箱"),
    },
    {
      label: "MFA 设备",
      description: "未绑定 MFA 设备，绑定后，可以进行二次确认",
      actionText: "绑定",
      icon: <SafetyOutlined />,
      onClick: () => handleSet("MFA 设备"),
    },
  ];

  return (
    <List
      dataSource={securitySettings}
      renderItem={(item) => (
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
  );
};

export default SecuritySettingsForm;

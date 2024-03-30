import { MessageOutlined } from "@ant-design/icons";
import { List, Switch, message } from "antd";
import type { FC } from "react";
import React from "react";

const NotificationSettingsForm: FC = () => {
  const handleSwitchChange = (label: string, checked: boolean) => {
    // 处理 Switch 开关变化
    if (checked) message.success(`${label}已开启`);
    else message.warning(`${label}已关闭`);
  };

  const notificationSettings = [
    {
      label: "其他用户的消息",
      description: "其他用户的消息将以站内信的形式通知",
    },
    {
      label: "系统消息",
      description: "系统消息将以站内信的形式通知",
    },
    {
      label: "待办任务",
      description: "待办任务将以站内信的形式通知",
    },
  ];

  return (
    <List
      dataSource={notificationSettings}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<MessageOutlined />}
            title={item.label}
            description={item.description}
          />
          <Switch
            onChange={(checked) => handleSwitchChange(item.label, checked)}
          />
        </List.Item>
      )}
    />
  );
};

export default NotificationSettingsForm;

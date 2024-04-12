import {
  AppstoreOutlined,
  EyeOutlined,
  GoogleOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
  SettingOutlined,
  SoundOutlined,
  UserOutlined,
} from "@ant-design/icons"; // 导入所需图标
import { Spin, Tabs, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import {
  AccountBindingForm,
  BasicSettingsForm,
  NotificationSettingsForm,
  OtherSettingsForm,
  PrivacySettingsForm,
  SecurityQuestionsForm,
  SecuritySettingsForm,
  SocialAccountsForm,
} from "./components";
import type { BasicSettingsFormProps } from "./components/BasicSettingsForm";
function SettingsPage() {
  const [data, setData] = useState<BasicSettingsFormProps["initialValues"]>({});
  const [loading, setLoading] = useState(true);
  const [tabPosition, setTabPosition] = useState<"left" | "top">("left");
  const { t } = useTranslation();
  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axios("/api/user/userInfo");
      const data = await response.data;
      setData(data);
    } catch (error: any) {
      message.error(`Error fetching data: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
    const handleResize = () => {
      // 根据视口宽度修改tabPosition
      if (window.innerWidth <= 768) setTabPosition("top");
      else setTabPosition("left");
    };
    // 初始设置一次
    handleResize();
    // 监听窗口变化
    window.addEventListener("resize", handleResize);
    // 清理函数
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Spin spinning={loading}>
      <Tabs
        tabPosition={tabPosition}
        items={[
          {
            key: "basic",
            label: t("LMAHHmyg"),
            icon: <UserOutlined />,
            children: <BasicSettingsForm initialValues={data} />,
          },
          {
            key: "security",
            label: t("LvKCwApB"),
            icon: <LockOutlined />,
            children: <SecuritySettingsForm initialValues={data} />,
          },
          {
            key: "account",
            label: t("fPrWgsff"),
            icon: <GoogleOutlined />,
            children: <AccountBindingForm />,
          },
          {
            key: "notification",
            label: t("HHAcBCvx"),
            icon: <SoundOutlined />,
            children: <NotificationSettingsForm />,
          },
          {
            key: "privacy",
            label: t("tAgmoaue"),
            icon: <EyeOutlined />,
            children: <PrivacySettingsForm />,
          },
          {
            key: "Security",
            label: t("PLxZtTEi"),
            icon: <SafetyCertificateOutlined />,
            children: (
              <SecurityQuestionsForm
                initialValues={{
                  securityQuestion: t("emmgqHVG"),
                  securityAnswer: "1990-01-01",
                }}
              />
            ),
          },
          {
            key: "social",
            label: t("JEjeIsXn"),
            icon: <AppstoreOutlined />,
            children: <SocialAccountsForm />,
          },
          {
            key: "other",
            label: t("guKNpWmX"),
            icon: <SettingOutlined />,
            children: <OtherSettingsForm />,
          },
        ]}
      />
    </Spin>
  );
}

export default SettingsPage;

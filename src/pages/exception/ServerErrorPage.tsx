import type { FC } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { BugOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const ServerErrorPage: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGoBack = () => {
    navigate(-1); // 返回上一页
  };

  const handleGoHome = () => {
    navigate("/"); // 返回首页
  };
  return (
    <Result
      status="500"
      title={`500${t("QmUoCGnX")}`}
      subTitle={`500${t("RafAcOOH")}`}
      icon={<BugOutlined />}
      extra={[
        <Button key="goBack" onClick={handleGoBack}>
          {t("nWeztsqz")}
        </Button>,
        <Button key="goHome" type="primary" onClick={handleGoHome}>
          {t("bJlOPeuE")}
        </Button>,
      ]}
    />
  );
};

export default ServerErrorPage;

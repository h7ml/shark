import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // 返回上一页
  };

  const handleGoHome = () => {
    navigate("/"); // 返回首页
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，您访问的页面不存在。"
      extra={[
        <Button type="primary" key="back" onClick={handleGoBack}>
          返回上一页
        </Button>,
        <Button key="home" onClick={handleGoHome}>
          返回首页
        </Button>,
      ]}
    />
  );
};

export default NotFoundPage;

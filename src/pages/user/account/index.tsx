import type { FC } from "react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Avatar,
  Button,
  Col,
  Form,
  List,
  Progress,
  Row,
  Space,
  Tag,
} from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import {
  ProCard,
  ProFormGroup,
  ProFormSwitch,
  ProList,
} from "@ant-design/pro-components";
import type { HeaderProps } from "./header";
import UserInfoHeader from "./header";
import DemoColumn from "@/pages/dashboard/column";
import { useAxios } from "@/hooks";

interface AccountPageProps {
  history: any;
  match: any;
}

interface ListItem {
  id: number;
  name: string;
  desc: string;
  updatedAt: string;
  star: number;
  status: boolean;
  percent: number;
  time: string;
  title: string;
}

interface MockData {
  list: ListItem[];
}

const AccountPage: FC<AccountPageProps> = () => {
  const [infoData, setInfoData] = useState<HeaderProps["userInfo"]>({});
  const [loading, setLoading] = useState(true);
  const [projectData, setProjectData] = useState<ListItem[]>([]);
  const [teamsData, setTeamsData] = useState<any[]>([]);
  const [activitiesData, setActivitiesData] = useState<any[]>([]);
  const { t } = useTranslation();

  // 获取用户信息数据
  const { data, isLoading, handleReload } = useAxios<HeaderProps["userInfo"]>({
    queryKey: "/api/user/userInfo",
    url: "/api/user/userInfo",
  });

  // 处理用户信息数据加载完成后的状态更新
  useEffect(() => {
    setLoading(true);
    if (!isLoading && data) {
      setLoading(isLoading);
      setInfoData(data);
    }
  }, [data, isLoading]);

  // 处理重新加载按钮点击事件，使数据失效并重新获取
  const handleRelaod = () => {
    handleReload([
      "/api/user/projects",
      "/api/user/teams",
      "/api/user/activities",
      "/api/user/userInfo",
      "column",
    ]);
  };

  // 获取项目数据
  const { data: projects } = useAxios<MockData>({
    queryKey: "/api/user/projects",
    url: "/api/user/projects",
  });

  // 处理项目数据加载完成后的状态更新
  useEffect(() => {
    if (projects) setProjectData(projects.list);
  }, [projects]);

  // 获取团队数据
  const { data: teams } = useAxios<MockData>({
    queryKey: "/api/user/teams",
    url: "/api/user/teams",
  });

  // 处理团队数据加载完成后的状态更新
  useEffect(() => {
    if (teams) setTeamsData(teams.list);
  }, [teams]);

  // 获取活动数据
  const { data: activities } = useAxios<MockData>({
    queryKey: "/api/user/activities",
    url: "/api/user/activities",
  });

  // 处理活动数据加载完成后的状态更新
  useEffect(() => {
    if (activities) setActivitiesData(activities.list);
  }, [activities]);

  // 定义一个组件用于渲染图标和文本
  const IconText = ({ icon, text }: { icon: FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <Row gutter={[16, 16]}>
      <UserInfoHeader userInfo={infoData} loading={loading} />
      <Col className="w-[100%]" lg={24} xl={16}>
        <div className="dark:bg-[rgb(33,41,70)] bg-white h-[550px] rounded-md p-[24px] relative">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{t("pUWDlNFY")}</h1>
            </div>
            <div>
              <Button type="primary" onClick={handleRelaod}>
                {t("ePjvKKGm")}
              </Button>
            </div>
          </div>
          <Row gutter={16}>
            {projectData.map((item: any) => (
              <Col span={8} className="p-20px" key={item.id}>
                <ProCard
                  bordered
                  hoverable
                  ghost={true}
                  title={item.title}
                  extra={
                    <ProFormGroup>
                      <Form>
                        <ProFormSwitch
                          noStyle
                          name="status"
                          checkedChildren={t("CNjonVfr")}
                          unCheckedChildren={t("uTxLCTDT")}
                        />
                      </Form>
                    </ProFormGroup>
                  }
                  className="cursor-pointer"
                  style={{ minHeight: "220px", padding: "10px" }}
                >
                  <p className="indent">{item.time}</p>
                  <p className="indent m-4">{item.desc}</p>
                </ProCard>
              </Col>
            ))}
          </Row>
        </div>
      </Col>
      <Col className="w-[100%]" lg={24} xl={8}>
        <div className="dark:bg-[rgb(33,41,70)] bg-white h-[550px] rounded-md p-[24px] relative overflow-scroll">
          <ProList<any>
            pagination={{
              defaultPageSize: 6,
              showSizeChanger: true,
            }}
            metas={{
              title: {},
              subTitle: {
                render: (_, row) => {
                  return (
                    <Space size={0}>
                      {row.tag?.map((tag: any) => (
                        <Tag color={tag.color} key={tag.color}>
                          {tag.text}
                        </Tag>
                      ))}
                    </Space>
                  );
                },
              },
              type: {},
              avatar: {},

              content: {
                render: (_, row) => {
                  return (
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <div
                        style={{
                          width: 200,
                        }}
                      >
                        <Tag color={row.color}>{row.status}</Tag>
                        <Progress percent={row.progress} />
                      </div>
                    </div>
                  );
                },
              },
              actions: {},
            }}
            headerTitle={<h2>{t("fEYkyzjq")}</h2>}
            dataSource={teamsData}
          />
        </div>
      </Col>

      <Col className="w-[100%]" lg={24} xl={16}>
        <div className="dark:bg-[rgb(33,41,70)] bg-white h-[550px] rounded-md p-[24px] relative overflow-scroll">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{t("qaPwtonK")}</h1>
            </div>
          </div>
          <List
            className="pt-2"
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 4,
            }}
            dataSource={activitiesData}
            renderItem={(item) => (
              <List.Item
                key={item.title}
                actions={[
                  <IconText
                    icon={StarOutlined}
                    text={item.star}
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    icon={LikeOutlined}
                    text={item.like}
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text={item.message}
                    key="list-vertical-message"
                  />,
                ]}
                extra={
                  <img width={64} height={64} alt="logo" src={item.avatar} />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.desc}
                />
                {item.content}
              </List.Item>
            )}
          />
        </div>
      </Col>
      <Col className="w-[100%]" lg={24} xl={8}>
        <div className="dark:bg-[rgb(33,41,70)]  h-[480px] rounded-md p-[24px] relative">
          <div className="flex justify-between">
            <span className="dark:text-[rgb(215,220,236)] text-[18px] text-[rgb(18,25,38)]">
              {t("EJUKJjId")}
            </span>
          </div>
          <div className="mt-10">
            {" "}
            <DemoColumn />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default AccountPage;

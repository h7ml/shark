import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'
import {
  ProCard,
  ProFormGroup,
  ProFormSwitch,
  ProList,
} from '@ant-design/pro-components'
import {
  Avatar,
  Button,
  Col,
  List,
  Progress,
  Row,
  Space,
  Tag,
  message,
} from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import type { HeaderProps } from './header'
import UserInfoHeader from './header'
import DemoColumn from '@/pages/dashboard/column'

interface AccountPageProps {
  history: any
  match: any
}

const AccountPage: React.FC<AccountPageProps> = () => {
  const [data, setData] = useState<HeaderProps['userInfo']>({})
  const [loading, setLoading] = useState(true)
  const [projectData, setProjectData] = useState<any[]>([])
  const [teamsData, setTeamsData] = useState<any[]>([])
  const [activitiesData, setActivitiesData] = useState<any[]>([])
  const fetchUser = async () => {
    setLoading(true)
    try {
      const response = await axios('/api/user/userInfo')
      const data = await response.data
      setData(data)
    }
    catch (error: string | any) {
      message.error('Error fetching data:', error)
    }
    finally {
      setLoading(false)
    }
  }

  const fetchProjects = async () => {
    try {
      const response = await axios('/api/user/projects')
      const data = await response.data.list
      setProjectData(data)
    }
    catch (error: string | any) {
      message.error('Error fetching data:', error)
    }
    finally {
      setLoading(false)
    }
  }

  const fetchTeams = async () => {
    try {
      const response = await axios('/api/user/teams')
      const data = await response.data.list
      setTeamsData(data)
    }
    catch (error: string | any) {
      message.error('Error fetching data:', error)
    }
    finally {
      setLoading(false)
    }
  }

  const fetachActivities = async () => {
    try {
      const response = await axios('/api/user/activities')
      const data = await response.data.list
      setActivitiesData(data)
    }
    catch (error: string | any) {
      message.error('Error fetching data:', error)
    }
    finally {
      setLoading(false)
    }
  }

  const IconText = ({ icon, text }: { icon: React.FC, text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )
  useEffect(() => {
    fetchProjects()
    fetchUser()
    fetchTeams()
    fetachActivities()
  }, [])
  return (
    <Row gutter={[16, 16]}>
      <UserInfoHeader userInfo={data} loading={loading} />
      <Col className="w-[100%]" lg={24} xl={16}>
        <div className="dark:bg-[rgb(33,41,70)] bg-white h-[550px] rounded-md p-[24px] relative">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">个人中心</h1>
            </div>
            <div>
              <Button
                type="default"
                onClick={() => {
                  fetchProjects()
                }}
              >
                刷新
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
                  extra={(
                    <ProFormGroup>
                      <ProFormSwitch
                        name="Enable"
                        noStyle
                        value={item.status === 'active'}
                        checkedChildren="启用"
                        unCheckedChildren="禁用"
                      />
                    </ProFormGroup>
                  )}
                  className="cursor-pointer"
                  style={{ minHeight: '220px', padding: '10px' }}
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
                  )
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
                        display: 'flex',
                        justifyContent: 'flex-end',
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
                  )
                },
              },
              actions: {},
            }}
            headerTitle={<h2>我的团队</h2>}
            dataSource={teamsData}
          />
        </div>
      </Col>

      <Col className="w-[100%]" lg={24} xl={16}>
        <div className="dark:bg-[rgb(33,41,70)] bg-white h-[550px] rounded-md p-[24px] relative overflow-scroll">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">最新动态</h1>
            </div>
          </div>
          <List
            className="pt-2"
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page)
              },
              pageSize: 4,
            }}
            dataSource={activitiesData}
            renderItem={item => (
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
              个人信息
            </span>
          </div>
          <div className="mt-10">
            {' '}
            <DemoColumn />
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default AccountPage

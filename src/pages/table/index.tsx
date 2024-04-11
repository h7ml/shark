import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Space,
  Table,
  Tag,
  message,
} from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type { FC } from 'react'
import { createRef, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { dateFormat, getCurrentWeek } from '@dext7r/utils'
import { useAxios, useQueryClient } from '@/hooks'

export interface DataType {
  key?: string
  name?: string
  age?: number
  address?: string
  tags?: string[]
}

const TablePage: FC = () => {
  const formref = createRef<any>()
  const formLayout = {
    labelCol: {
      xs: { span: 3 },
      sm: { span: 4 },
      xl: { span: 3 },
      xxl: { span: 1 },
    },
    wrapperCol: {
      xs: { span: 20 },
      sm: { span: 20 },
      xl: { span: 20 },
      xxl: { span: 24 },
    },
  }
  const [messageApi, contextHolder] = message.useMessage()
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState('Content of the modal')
  const [editRecord, setEditRecord] = useState<DataType>({})
  const showModal = (record: DataType) => {
    setEditRecord(record)
    setModalText(t('qnhgwihA') + record.name + t('iuBlQeDg'))
    setOpen(true)
  }
  const handleOk = () => {
    setConfirmLoading(true)

    const deleteKey = editRecord.key

    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
      queryClient.setQueryData<ColumnData | undefined>(
        '/api/table',
        (prevData) => {
          if (!prevData)
            return prevData
          const filteredData = prevData.data.filter(
            item => item.key !== deleteKey,
          )
          const updatedData: ColumnData = {
            ...prevData,
            data: filteredData,
          }
          messageApi.open({
            type: 'success',
            content: t('QlwEBiLq'),
            duration: 1,
          })
          return updatedData
        },
      )
    }, 2000)
  }

  interface ListProps {
    name: string
    key: number
    age: number
    address: string
    tags: string[]
  }
  interface ColumnData {
    data: ListProps[]
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setOpen(false)
  }
  const columns: ColumnsType<DataType> = [
    {
      title: t('gtRVLkTF'),
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      render: text => <a>{text}</a>,
    },
    {
      title: t('exDcSRog'),
      dataIndex: 'age',
      align: 'center',
      key: 'age',
    },
    {
      title: t('YXDPCCtv'),
      align: 'center',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: t('JtpuFUhm'),
      key: 'tags',
      align: 'center',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags?.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser')
              color = 'volcano'
            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: t('oPENPbuO'),
      key: 'action',
      align: 'center',
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => {
              setEditRecord(record)
              setDrawerOpen(true)
            }}
          >
            {t('fAWmvClP')}
          </Button>
          <Button
            danger
            type="primary"
            onClick={() => {
              showModal(record)
            }}
          >
            {t('UseQXSFf')}
          </Button>
        </Space>
      ),
    },
  ]
  const { data, isLoading, error } = useAxios<ColumnData>({
    queryKey: '/api/table',
    url: '/api/table',
  })
  const onFinishEdit = (values: ListProps) => {
    const updatedRecord = {
      ...editRecord,
      ...values,
    }

    queryClient.setQueryData<ColumnData | undefined>(
      '/api/table',
      (prevData) => {
        if (!prevData)
          return prevData
        const updatedData: ColumnData = {
          ...prevData,
          data: prevData.data.map(item =>
            item.key === updatedRecord.key ? updatedRecord : item,
          ),
        }
        message.success(t('NKuxNtiN'))
        return updatedData
      },
    )
    setEditRecord({})
    setDrawerOpen(false)
  }

  const [columnData, setColumnData] = useState<ListProps[]>([])
  useEffect(() => {
    if (!isLoading && !error && data?.data)
      setColumnData(data.data)
  }, [data, isLoading, error])

  const onFinish = (values: {
    name: string | null | undefined
    age: number | null | undefined
  }) => {
    if (values.name || values.age) {
      const rawData = queryClient.getQueryData<ColumnData>('/api/table')
      if (rawData && 'data' in rawData) {
        const data = rawData.data
        const filteredData = data.filter(
          (item: { name: string | null, age: number | null }) => {
            // 使用条件判断处理可能为 null 的 name 和 age 值
            return (
              (values.name === null
              || values.name === undefined
              || item.name?.includes(values.name))
              && (values.age === null
              || values.age === undefined
              || item.age === values.age)
            )
          },
        )
        setColumnData(filteredData)
      }
    }
  }

  useEffect(() => {
    formref.current?.setFieldsValue(editRecord)
  }, [editRecord, formref])
  return (
    <div className="dark:bg-[rgb(33,41,70)] bg-white p-[24px] rounded-md">
      {contextHolder}
      <p>{`${dateFormat('YYYY/MM/DD HH:mm')} ${getCurrentWeek()}`}</p>
      <Modal
        title={t('Edit')}
        rootClassName="mt-22vh"
        open={drawerOpen}
        onOk={() => {
          onFinishEdit(formref.current.getFieldsValue())
        }}
        cancelText={t('hAxbfvSF')}
        okText={t('hGYTYdGu')}
        onCancel={() => {
          setEditRecord({})
          setDrawerOpen(false)
        }}
      >
        <Form
          key={editRecord?.key}
          layout="horizontal"
          {...formLayout}
          name="basic"
          ref={formref}
          onFinish={onFinishEdit}
          initialValues={editRecord}
        >
          <Form.Item name="name" label={t('Name')}>
            <Input />
          </Form.Item>
          <Form.Item name="age" label={t('Age')}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="address" label={t('Address')}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title={t('rwgJkNNx')}
        open={open}
        onOk={handleOk}
        cancelText={t('hAxbfvSF')}
        okText={t('hGYTYdGu')}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
      <Form
        size="large"
        onFinish={onFinish}
        className="dark:bg-[rgb(33,41,70)] bg-white p-[24px] rounded-md"
      >
        <Row gutter={24}>
          <Col className="w-[100%]" lg={24} xl={8}>
            <Form.Item name="name" label={t('gtRVLkTF')}>
              <Input />
            </Form.Item>
          </Col>
          <Col className="w-[100%]" lg={24} xl={8}>
            <Form.Item name="age" label={t('exDcSRog')}>
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col className="w-[100%] text-right" lg={24} xl={8}>
            <Space>
              <Button type="primary" htmlType="submit">
                {t('tXytgkBI')}
              </Button>
              {' '}
              {/* 设置搜索按钮 */}
              <Button
                onClick={() => {
                  onFinish({ name: null, age: null })
                }}
              >
                {t('fDiHzaqR')}
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
      <div className="mt-[16px] dark:bg-[rgb(33,41,70)] rounded-md">
        <Table
          scroll={{ x: true }}
          columns={columns}
          dataSource={columnData}
          className="bg-transparent"
        />
      </div>
    </div>
  )
}

export default TablePage

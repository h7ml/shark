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
import axios from 'axios'
import type { FC, SetStateAction } from 'react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

const TablePage: FC = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState('Content of the modal')
  const showModal = (record: DataType) => {
    setModalText(t('qnhgwihA') + record.name + t('iuBlQeDg'))
    setOpen(true)
  }
  const handleOk = () => {
    messageApi.open({
      type: 'success',
      content: t('QlwEBiLq'),
      duration: 1,
    })
    setConfirmLoading(true)
    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
    }, 2000)
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
      render: (_, { tags, id }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser')
              color = 'volcano'
            return (
              <Tag color={color} key={tag + id}>
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
          <Button type="primary">{t('fAWmvClP')}</Button>
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
  const [data, setData] = useState<DataType[]>([])
  const asyncFetch = () => {
    axios
      .get('/api/table')
      .then((json: { data: { data: SetStateAction<DataType[]> } }) => {
        setData(json.data.data)
      })
      .catch((error: any) => {
        console.log('fetch data failed', error)
      })
  }

  useEffect(() => {
    asyncFetch()
  }, [])
  return (
    <div>
      {contextHolder}
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
              <Button type="primary">{t('tXytgkBI')}</Button>
              <Button>{t('fDiHzaqR')}</Button>
            </Space>
          </Col>
        </Row>
      </Form>
      <div className="mt-[16px] dark:bg-[rgb(33,41,70)] rounded-md">
        <Table
          scroll={{ x: true }}
          columns={columns}
          dataSource={data}
          className="bg-transparent"
        />
      </div>
    </div>
  )
}

export default TablePage

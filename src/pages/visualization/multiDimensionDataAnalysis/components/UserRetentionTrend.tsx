import { InfoCircleOutlined } from '@ant-design/icons'
import { TinyLine } from '@antv/g2plot'
import { Col, Divider, Tooltip } from 'antd'
import type { FC } from 'react'
import { useEffect, useRef } from 'react'
import { t } from '@/utils'

export interface UserRetentionTrendProps {
  data: number[]
}
const UserRetentionTrend: FC<UserRetentionTrendProps> = ({ data }) => {
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!container.current || !data.length)
      return

    const tinyLine = new TinyLine(container.current, {
      height: 60,
      autoFit: false,
      data,
      color: '#ffffff',
      smooth: true,
    })

    tinyLine.render()
    return () => {
      if (tinyLine)
        tinyLine.destroy()
    }
  }, [data])
  return (
    <Col xl={6} lg={12} className="w-[100%]">
      <div className="dark:bg-[rgb(33,41,70)] bg-[rgb(30,136,229)] theme1 overflow-hidden h-[241px] relative rounded-md bg-card p-[32px] box-border">
        <div className="absolute top-[24px] right-[24px] z-10">
          <Tooltip title={t('iLyPEqwQ' /* 指标说明 */)}>
            <InfoCircleOutlined className="text-[rgb(179,157,219)] text-[20px]" />
          </Tooltip>
        </div>
        <div className="text-white text-[16px]">用户留存趋势</div>
        <div className="text-white text-2xl mt-[20px] text-[30px]">1,314</div>
        <div className="mt-[20px] text-[rgba(229,224,216,0.85)] text-[16px] flex gap-[24px]">
          <div ref={container} className="w-full h-[150px]" key={data.length} />
        </div>
        <Divider className="dark:bg-[rgb(189,200,240)] bg-[rgb(227,232,239)] opacity-[0.2] my-[16px]" />
        <div className="text-[rgba(229,224,216,0.85)] text-[16px]">
          <span>{t('sehypRaO' /* 日访问量 */)}</span>
          <span className="ml-[8px]">9,431</span>
        </div>
      </div>
    </Col>
  )
}

export default UserRetentionTrend

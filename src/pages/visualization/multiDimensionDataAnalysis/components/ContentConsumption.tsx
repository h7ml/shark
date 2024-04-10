import { InfoCircleOutlined } from '@ant-design/icons'
import { Column } from '@antv/g2plot'
import { Col, Divider, Tooltip } from 'antd'
import type { FC } from 'react'
import { useEffect, useRef } from 'react'
import { t } from '@/utils'

export interface ContentConsumptionItem {
  name: string
  sales: number
  month: string
}
export interface ContentConsumptionProps {
  data: ContentConsumptionItem[]
}
const ContentConsumption: FC<ContentConsumptionProps> = ({ data }) => {
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!container.current || !data.length)
      return

    const column = new Column(container.current, {
      data,
      isGroup: true,
      xField: 'month',
      yField: 'sales',
      seriesField: 'name',
      // 分组柱状图 组内柱子间的间距 (像素级别)
      dodgePadding: 2,
      // 分组柱状图 组间的间距 (像素级别)
      intervalPadding: 20,
      legend: {
        itemName: {
          style: {
            fill: '#fff',
            fontSize: 12,
          },
        },
      },
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'top', 'middle', 'bottom'
        // 可配置附加的布局方法
        layout: [
          // 柱形图数据标签位置自动调整
          { type: 'interval-adjust-position' },
          // 数据标签防遮挡
          { type: 'interval-hide-overlap' },
          // 数据标签文颜色自动调整
          { type: 'adjust-color' },
        ],
      },
    })

    column.render()
    return () => {
      if (column)
        column.destroy()
    }
  }, [data])
  return (
    <Col lg={12} xl={6} className="w-[100%]">
      <div className="dark:bg-[rgb(33,41,70)] w-[100%] bg-[rgb(94,53,177)] overflow-hidden h-[241px] relative rounded-md bg-card p-[32px] box-border">
        <div className="absolute top-[24px] right-[24px] z-10">
          <Tooltip title={t('iLyPEqwQ' /* 指标说明 */)}>
            <InfoCircleOutlined className="text-[rgb(179,157,219)] text-[20px]" />
          </Tooltip>
        </div>
        <div className="text-white text-[16px]">
          {t('pqONtvkK')}
          {' '}
          {data[0]?.sales}
        </div>
        <div className="mt-[10px] text-[rgba(229,224,216,0.85)] text-[16px] flex gap-[24px]">
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

export default ContentConsumption

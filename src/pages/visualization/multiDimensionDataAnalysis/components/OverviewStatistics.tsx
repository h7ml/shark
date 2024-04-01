import { t } from '@/utils'
import { Line } from '@antv/g2plot'
import { Card } from 'antd'
import type { FC } from 'react'
import { useEffect, useRef } from 'react'

export interface DataItem {
  name: string
  year: string
  gdp: number
}
interface OverviewStatisticsProps {
  data: DataItem[]
}

const OverviewStatistics: FC<OverviewStatisticsProps> = ({ data }) => {
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!container.current || !data.length)
      return

    const line = new Line(container.current, {
      data,
      xField: 'year',
      yField: 'gdp',
      seriesField: 'name',
      yAxis: {
        label: {
          formatter: v => `${(v / 10e8).toFixed(1)} B`,
        },
      },
      legend: {
        position: 'top',
      },
      smooth: true,
      // 配置折线趋势填充
      area: {
        style: {
          fillOpacity: 0.15,
        },
      },
      animation: {
        appear: {
          animation: 'wave-in',
          duration: 3000,
        },
      },
    })
    line.render()
    return () => {
      if (line)
        line.destroy()
    }
  }, [data])
  return (
    <Card
      title="数据总览"
      className="overview-statistics h-[500px]"
      key={data.length}
    >
      <div ref={container} className="w-full" key={data.length} />
    </Card>
  )
}

export default OverviewStatistics

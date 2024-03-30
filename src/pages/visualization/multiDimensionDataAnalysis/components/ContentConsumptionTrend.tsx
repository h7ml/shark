import { TinyLine } from '@antv/g2plot'
import { Card } from 'antd'
import type { FC } from 'react'
import React, { useEffect, useRef } from 'react'

export interface ContentConsumptionTrendProps {
  data: number[]
}

const ContentConsumptionTrend: FC<ContentConsumptionTrendProps> = ({
  data,
}) => {
  const container = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!container.current || !data.length)
      return

    const tinyLine = new TinyLine(container.current, {
      height: 60,
      autoFit: false,
      data,
      smooth: true,
    })

    tinyLine.render()
    return () => {
      if (tinyLine)
        tinyLine.destroy()
    }
  }, [data])
  return (
    <Card title="内容消费趋势" className="content-consumption-trend">
      <div ref={container} className="w-full h-[150px]" key={data.length} />
    </Card>
  )
}

export default ContentConsumptionTrend

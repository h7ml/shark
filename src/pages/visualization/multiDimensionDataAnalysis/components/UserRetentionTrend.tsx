import type { FC } from 'react'
import { useEffect, useRef } from 'react'
import { Card } from 'antd'
import { TinyLine } from '@antv/g2plot'

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
      smooth: true,
    })

    tinyLine.render()
    return () => {
      if (tinyLine)
        tinyLine.destroy()
    }
  }, [data])
  return (
    <Card title="用户留存趋势" className="user-retention-trend">
      <div ref={container} className="w-full h-[150px]" key={data.length} />
    </Card>
  )
}

export default UserRetentionTrend

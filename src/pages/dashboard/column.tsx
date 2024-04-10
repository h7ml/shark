import { Column } from '@ant-design/plots'
import React, { useEffect, useState } from 'react'

import columnDarkTheme from './theme/dark-column-theme.json'
import columnLightTheme from './theme/light-column-theme.json'
import { useGlobalStore } from '@/store/global'
import { useAxios } from '@/hooks'

interface ListProps {
  year: string
  value: number
  type: string
}
interface ColumnData {
  data: ListProps[]
}

function DemoColumn() {
  const { darkMode } = useGlobalStore()
  const { data, isLoading, error } = useAxios<ColumnData>({
    queryKey: 'column',
    url: '/api/column/dashboard',
  })

  const [columnData, setColumnData] = useState<ListProps[]>([])

  useEffect(() => {
    if (!isLoading && !error && data?.data)
      setColumnData(data.data)
  }, [data, isLoading, error])

  const config = {
    data: columnData,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    height: 460,
    legend: {
      position: 'bottom',
    },
  }

  return (
    <Column theme={darkMode ? columnDarkTheme : columnLightTheme} {...config} />
  )
}

export default DemoColumn

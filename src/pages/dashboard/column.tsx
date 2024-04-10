import { Column } from '@ant-design/plots'
import React, { useEffect, useState } from 'react'

import axios from 'axios'
import columnDarkTheme from './theme/dark-column-theme.json'
import columnLightTheme from './theme/light-column-theme.json'
import { useGlobalStore } from '@/store/global'

function DemoColumn() {
  const [data, setData] = useState([])
  const { darkMode } = useGlobalStore()

  const asyncFetch = async () => {
    const {
      data: { data: list },
    } = await axios.get('/api/column/dashboard')
    setData(list)
  }

  useEffect(() => {
    asyncFetch()
  }, [])

  const config = {
    data,
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

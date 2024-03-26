import { ThemeConfig, theme } from 'antd'
import { colors } from './colors'

import { routeConfig } from '@/config/routes'
import BasicLayout from '@/layouts'
import { createBrowserRouter } from 'react-router-dom'
import Login from '@/pages/user/login'

export const lightTheme: ThemeConfig = {
  token: {
    ...colors
  }
}

export const darkTheme: ThemeConfig = {
  token: {
    ...colors,
    // colorBgTextHover: '#f0e9f7',
    // colorBgBase: 'rgb(17, 25, 54)',
    // colorBgLayout: 'rgb(17, 25, 54)',
    colorBgContainer: 'rgb(26, 34, 63)',
    colorBorder: 'rgba(189, 200, 240, 0.157)',
    colorBgTextHover: 'rgba(124, 77, 255, 0.082)',
    colorTextHover: 'rgba(124, 77, 255, 0.082)'
  },
  algorithm: theme.darkAlgorithm
}

export const sharkRouter = createBrowserRouter([
  {
    path: '/user/login',
    Component: Login
  },
  {
    path: '/',
    Component: BasicLayout,
    children: routeConfig
  }
])
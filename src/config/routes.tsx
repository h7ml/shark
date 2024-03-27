import {
  DashboardOutlined,
  TableOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

export interface MenuItem {
  path: string
  title?: string
  icon?: any
  element?: any
  children?: MenuItem[]
  layout?: boolean
  Component?: any
}

export const routeConfig: MenuItem[] = [
  {
    path: '/dashboard',
    title: '驾驶舱',
    icon: <DashboardOutlined />,
    Component: lazy(() => import('@/pages/dashboard')),
  },
  {
    path: '/user',
    Component: lazy(() => import('@/pages/user')),
    title: '用户中心',
    icon: <UserOutlined />,
  },
  {
    path: '/table',
    Component: lazy(() => import('@/pages/table')),
    title: '表格',
    icon: <TableOutlined />,
  },
  {
    path: '/',
    element: <Navigate to="/dashboard" />,
  },
]

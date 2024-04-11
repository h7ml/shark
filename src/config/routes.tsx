import {
  AimOutlined,
  BugOutlined,
  ContactsOutlined,
  DashboardOutlined,
  DeploymentUnitOutlined,
  EyeOutlined,
  FileUnknownOutlined,
  LockOutlined,
  TableOutlined,
  UserOutlined,
  VideoCameraOutlined,
  WarningOutlined,
} from '@ant-design/icons'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

export interface MenuItem {
  key?: string
  path: string
  title: string
  icon?: any
  element?: any
  children?: MenuItem[]
  layout?: boolean
  Component?: any
}

export const routeConfig: MenuItem[] = [
  {
    path: '/dashboard',
    title: 'dashboard',
    icon: <DashboardOutlined />,
    Component: lazy(() => import('@/pages/dashboard')),
  },
  {
    path: '/user',
    // Component: lazy(() => import('@/pages/user')),
    title: 'ueiriPPJ',
    icon: <UserOutlined />,
    children: [
      {
        path: '/user/account',
        title: 'pUWDlNFY',
        icon: <AimOutlined />,
        Component: lazy(() => import('@/pages/user/account')),
      },
      {
        path: '/user/settings',
        title: 'nKmJjYdX',
        icon: <ContactsOutlined />,
        Component: lazy(() => import('@/pages/user/settings')),
      },
    ],
  },
  {
    path: '/visualization',
    title: 'oViTwVZs',
    icon: <EyeOutlined />,
    children: [
      {
        path: '/visualization/multiDimensionDataAnalysis',
        title: 'ZGzgIIjL',
        icon: <DeploymentUnitOutlined />,
        Component: lazy(
          () => import('@/pages/visualization/multiDimensionDataAnalysis'),
        ),
      },
    ],
  },
  {
    path: '/table',
    Component: lazy(() => import('@/pages/table')),
    title: 'nFPoUFZq',
    icon: <TableOutlined />,
  },
  {
    path: '/video',
    Component: lazy(() => import('@/pages/video')),
    title: 'FZogKjGC',
    icon: <VideoCameraOutlined />,
  },
  {
    path: '/exception',
    title: 'mVCBkHUZ',
    icon: <WarningOutlined />,
    children: [
      {
        path: '/exception/403',
        title: '403',
        icon: <LockOutlined />,
        Component: lazy(() => import('@/pages/exception/ForbiddenPage')),
      },
      {
        path: '/exception/404',
        title: '404',
        icon: <FileUnknownOutlined />,
        Component: lazy(() => import('@/pages/exception/NotFoundPage')),
      },
      {
        path: '/exception/500',
        title: '500',
        icon: <BugOutlined />,
        Component: lazy(() => import('@/pages/exception/ServerErrorPage')),
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to="/dashboard" />,
    title: 'dashboard',
  },
]

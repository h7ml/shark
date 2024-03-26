import { UserOutlined, ProjectOutlined } from '@ant-design/icons';
import { lazy } from 'react';

export interface MenuItem {
  path: string;
  title?: string;
  icon?: unknown;
  element?: unknown;
  children?: MenuItem[];
  layout?: boolean;
  Component?: unknown;
}


export const routeConfig: MenuItem[] = [{
  path: '/home',
  title: '项目列表',
  icon: <ProjectOutlined />,
  children: [{
    path: '/home/index',
    Component: lazy(() => import('@/pages/home')),
    title: '项目列表',
    icon: <ProjectOutlined />,
  }],
},
{
  path: '/user',
  Component: lazy(() => import('@/pages/user')),
  title: 'user',
  icon: <UserOutlined />,
}]

import {
  AimOutlined,
  ContactsOutlined,
  DashboardOutlined,
  DeploymentUnitOutlined,
  EyeOutlined,
  TableOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

export interface MenuItem {
  path: string;
  title?: string;
  icon?: any;
  element?: any;
  children?: MenuItem[];
  layout?: boolean;
  Component?: any;
}

export const routeConfig: MenuItem[] = [
  {
    path: "/dashboard",
    title: "驾驶舱",
    icon: <DashboardOutlined />,
    Component: lazy(() => import("@/pages/dashboard")),
  },
  {
    path: "/user",
    // Component: lazy(() => import('@/pages/user')),
    title: "用户中心",
    icon: <UserOutlined />,
    children: [
      {
        path: "/user/account",
        title: "个人中心",
        icon: <AimOutlined />,
        Component: lazy(() => import("@/pages/user/account")),
      },
      {
        path: "/user/settings",
        title: "个人设置",
        icon: <ContactsOutlined />,
        Component: lazy(() => import("@/pages/user/settings")),
      },
    ],
  },
  {
    path: "/visualization",
    title: "数据可视化",
    icon: <EyeOutlined />,
    children: [
      {
        path: "/visualization/multiDimensionDataAnalysis",
        title: "多维数据分析",
        icon: <DeploymentUnitOutlined />,
        Component: lazy(
          () => import("@/pages/visualization/multiDimensionDataAnalysis"),
        ),
      },
    ],
  },
  {
    path: "/table",
    Component: lazy(() => import("@/pages/table")),
    title: "表格",
    icon: <TableOutlined />,
  },
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
];

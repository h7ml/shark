import type { ThemeConfig } from "antd";
import { theme } from "antd";
import { createHashRouter } from "react-router-dom";

import { colors } from "./colors";
import { routeConfig } from "@/config/routes";
import BasicLayout from "@/layouts";
import NotFoundPage from "@/pages/exception/NotFoundPage";
import Login from "@/pages/user/login";

export const lightTheme: ThemeConfig = {
  token: {
    ...colors,
  },
};

export const darkTheme: ThemeConfig = {
  token: {
    ...colors,
    // colorPrimary: 'rgb(103, 58, 183)',
    // colorBgTextHover: '#f0e9f7',
    colorBgBase: "rgb(17, 25, 54)",
    // colorBgLayout: 'rgb(17, 25, 54)',
    colorBgContainer: "rgb(26, 34, 63)",
    colorBorder: "rgba(189, 200, 240, 0.157)",
    colorBgTextHover: "rgba(124, 77, 255, 0.082)",
    colorTextHover: "rgba(124, 77, 255, 0.082)",
    controlItemBgActive: "rgba(33, 150, 243, 0.16)",
  },
  algorithm: theme.darkAlgorithm,
};

export const sharkRouter = createHashRouter([
  {
    path: "/user/login",
    Component: Login,
  },
  {
    path: "/",
    Component: BasicLayout,
    children: routeConfig,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

import { ErrorBoundary, Provider } from '@rollbar/react';
import type { FC, ReactNode } from 'react';
import React from 'react';

export interface RollbarMonitorProps {
  children?: ReactNode;
  rollbarKey?: string;
  rollbarEnv?: string;
  debug?: boolean;
}

/**
 * RollbarMonitor 组件
 *
 * 使用 Rollbar 和 ErrorBoundary 捕获和处理错误
 *
 * @param {object} props 传递给组件的属性
 * @param {ReactNode} props.children 组件的子元素
 * @param {string} props.rollbarKey Rollbar 的访问令牌
 * @param {string} props.rollbarEnv Rollbar 的环境
 * @param {boolean} props.debug 是否开启调试模式
 * @returns {React.ReactNode} 返回一个包含 Rollbar 和 ErrorBoundary 的 React 组件
 */
const RollbarMonitor: FC<RollbarMonitorProps> = ({
  children,
  rollbarKey,
  rollbarEnv,
  debug,
}) => {
  if (debug) {
    console.log('开启调试模式');
    console.log(`rollbarKey: ${rollbarKey}`);
  }

  const config = {
    accessToken: rollbarKey || '23b8e46f18bd4eecaee8855d44148de4',
    environment: rollbarEnv || 'testenv',
  };

  /**
   * 返回一个 React 组件，该组件使用 Rollbar 和 ErrorBoundary 来捕获和处理错误
   *
   * @param children 传递给组件的子元素
   * @returns 返回一个包含 Rollbar 和 ErrorBoundary 的 React 组件
   */
  return (
    <Provider config={config}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Provider>
  );
};

export default RollbarMonitor;

import { ErrorBoundary, Provider } from '@rollbar/react'
import type { FC, ReactNode } from 'react'

const rollbarConfig = {
  accessToken: '23b8e46f18bd4eecaee8855d44148de4',
  environment: 'testenv',
}

interface RollbarMonitorProps {
  children: ReactNode
}

/**
 * RollbarMonitor 组件
 *
 * 使用 Rollbar 和 ErrorBoundary 捕获和处理错误
 *
 * @param {object} props 传递给组件的属性
 * @param {ReactNode} props.children 组件的子元素
 * @returns {React.ReactNode} 返回一个包含 Rollbar 和 ErrorBoundary 的 React 组件
 */
const RollbarMonitor: FC<RollbarMonitorProps> = ({ children }) => {
  /**
   * 返回一个React组件，该组件使用Rollbar和ErrorBoundary来捕获和处理错误
   *
   * @param children 传递给组件的子元素
   * @returns 返回一个包含Rollbar和ErrorBoundary的React组件
   */
  return (
    <Provider config={rollbarConfig}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Provider>
  )
}

export default RollbarMonitor

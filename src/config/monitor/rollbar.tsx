import { Provider, ErrorBoundary } from '@rollbar/react'
import { ReactNode } from 'react'

const rollbarConfig = {
  accessToken: '12bce9bb2cd4466a8f71d3e31c7b85a1',
  environment: 'testenv',
}



/**
 * RollbarMonitor 组件
 *
 * 使用 Rollbar 和 ErrorBoundary 捕获和处理错误
 *
 * @param children 传递给组件的子元素
 * @returns 返回一个包含 Rollbar 和 ErrorBoundary 的 React 组件
 */
function RollbarMonitor({ children }: { children: ReactNode }) {
  /**
   * 返回一个React组件，该组件使用Rollbar和ErrorBoundary来捕获和处理错误
   *
   * @param children 传递给组件的子元素
   * @returns 返回一个包含Rollbar和ErrorBoundary的React组件
   */
  return (
    <Provider config={rollbarConfig}>
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </Provider >
  )
}

export default RollbarMonitor

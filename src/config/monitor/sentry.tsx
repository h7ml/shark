import { t } from '@/utils'
import * as Sentry from '@sentry/react'
import type { FC, ReactNode } from 'react'
import '@/config/nprogress'
Sentry.init({
  dsn: 'https://41ab9ee3a8eb92a3bdfdb1526de176ce@o933014.ingest.us.sentry.io/4507003679145984',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  // tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  maxBreadcrumbs: 50,
  // Enable Session Replay for all users except developers to easily access it.
})
/**
 * FallbackComponent 组件用于处理异常情况，当发生错误时显示提示信息
 *
 * @returns 返回一个包含提示信息的 JSX.Element 对象
 */
function FallbackComponent() {
  return <h2>请刷新页面重新操作</h2>
}

interface SentryMonitorProps {
  children: ReactNode
}
/**
 * Sentry监控组件
 * @param {object} props 组件属性
 * @param {ReactNode} props.children React节点，需要被Sentry监控的子组件
 * @returns {React.ReactNode} 返回被Sentry监控的子组件
 */
const SentryMonitor: FC<SentryMonitorProps> = ({ children }) => {
  return (
    <Sentry.ErrorBoundary fallback={FallbackComponent}>
      {children}
    </Sentry.ErrorBoundary>
  )
}

export default SentryMonitor

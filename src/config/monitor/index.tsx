import type { FC, ReactNode } from 'react'
import SentryMonitor from './sentry'
import RollbarMonitor from './rollbar'
import QueryClientWrapper from './react-query'

interface MonitorProps {
  children: ReactNode
}

const Monitor: FC<MonitorProps> = ({ children }) => {
  return (
    <SentryMonitor>
      <RollbarMonitor>
        <QueryClientWrapper>{children}</QueryClientWrapper>
      </RollbarMonitor>
    </SentryMonitor>
  )
}
export default Monitor

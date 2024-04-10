import type { FC, ReactNode } from 'react'
import SentryMonitor from './sentry'
import RollbarMonitor from './rollbar'

interface MonitorProps {
  children: ReactNode
}

const Monitor: FC<MonitorProps> = ({ children }) => {
  return (
    <SentryMonitor>
      <RollbarMonitor>
        \
        {children}
      </RollbarMonitor>
    </SentryMonitor>
  )
}
export default Monitor

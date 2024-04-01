import type { FC, ReactNode } from 'react'
import SentryMonitor from './sentry'
import RollbarMonitor from './rollbar'
import FundebugMonitor from './fundebug'

interface MonitorProps {
  children: ReactNode
}

const Monitor: FC<MonitorProps> = ({ children }) => {
  return (
    <SentryMonitor>
      <RollbarMonitor>
        <FundebugMonitor>{children}</FundebugMonitor>
      </RollbarMonitor>
    </SentryMonitor>
  )
}
export default Monitor

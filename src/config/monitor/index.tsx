import { ReactNode } from 'react'
import SentryMonitor from './sentry'
import RollbarMonitor from './rollbar'
import FundebugMonitor from './fundebug'
function Monitor({ children }: { children: ReactNode }) {
  return <>
    <SentryMonitor>
      <RollbarMonitor>
        <FundebugMonitor>
          {children}
        </FundebugMonitor>
      </RollbarMonitor>

    </SentryMonitor>
  </>
}
export default Monitor

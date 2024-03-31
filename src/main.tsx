import '@/App.css'
import '@/index.css'
import 'nprogress/nprogress.css'
import '@/mock'
import * as Sentry from '@sentry/react'

import NProgress from 'nprogress'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App.tsx'

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
})

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
  parent: '#root',
})

function FallbackComponent() {
  return <div>An error has occured</div>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
      <App />
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
)

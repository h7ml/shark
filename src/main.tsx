import '@/App.css'
import '@/index.css'
import '@/mock'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/App.tsx'
import Monitor from '@/config/monitor'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Monitor>
    <StrictMode>
      <App />
    </StrictMode>
  </Monitor>,
)

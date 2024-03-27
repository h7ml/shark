import React from 'react'
import ReactDOM from 'react-dom/client'
import NProgress from 'nprogress'
import App from '@/App.tsx'
import '@/App.css'
import '@/index.css'
import 'nprogress/nprogress.css'
import '@/mock'

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
  parent: '#root',
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// This file was added by edgio init.
// You should commit this file to source control.

import { Router } from '@edgio/core/router'

export default new Router().static('dist', ({ cache }) => {
  cache({
    edge: {
      maxAgeSeconds: 60 * 60 * 60 * 365,
      forcePrivateCaching: true,
    },
    browser: {
      maxAgeSeconds: 0,
      serviceWorkerSeconds: 60 * 60 * 24,
    },
  })
})

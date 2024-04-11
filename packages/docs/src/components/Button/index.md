# Foo

This is an example component.

```jsx
import React from 'react'
import dayjs from 'dayjs'
import { getCurrentDate } from '@dext7r/utils'
import { Button, Calendar, Divider } from '@dext7r/ui'
const { ymd } = getCurrentDate({ type: 2 })
export default () => (
  <div className="App">
    <Divider />
    <section>
      <Button>Click</Button>
    </section>
    <Calendar value={dayjs(ymd)} />
  </div>
)
```

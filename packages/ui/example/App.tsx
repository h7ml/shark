import React from 'react'
import dayjs from 'dayjs'
import { getCurrentDate } from '@dext7r/utils'
import { Button, Calendar, Divider } from '../packages'

function App() {
  const { ymd } = getCurrentDate({ type: 2 })
  return (
    <div className="App">
      <Divider />
      <section>
        <Button>Click</Button>
      </section>
      <Calendar value={dayjs(ymd)} />
    </div>
  )
}

export default App

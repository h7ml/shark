import { Button, Calendar, Divider } from '@dext7r/ui';
import { getCurrentDate } from '@dext7r/utils';
import dayjs from 'dayjs';
import React from 'react';

function App() {
  const { ymd } = getCurrentDate({ type: 2 });
  return (
    <div className="App">
      <Divider />
      <section>
        <Button>Click</Button>
      </section>
      <Calendar value={dayjs(ymd)} />
    </div>
  );
}

export default App;

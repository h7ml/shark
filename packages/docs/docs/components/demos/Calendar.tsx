import { Calendar } from "@dext7r/ui";
import { getCurrentDate } from "@dext7r/utils";
import dayjs from "dayjs";
import React from "react";

function App() {
  const { ymd } = getCurrentDate({ type: 2 });
  return (
    <div className="App" style={{ background: "#fff" }}>
      <Calendar value={dayjs(ymd)} />
    </div>
  );
}

export default App;

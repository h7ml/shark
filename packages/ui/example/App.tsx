import React from "react";
import dayjs from "dayjs";
import { getCurrentDate } from "@dext7r/utils";
import {
  Button,
  Calendar,
  Divider,
  Monitor,
  MonitorContextProvider,
} from "../packages";

function App() {
  const { ymd } = getCurrentDate({ type: 2 });
  return (
    <div className="App">
      <Divider />
      <section>
        <Button>Click</Button>
      </section>
      <Calendar value={dayjs(ymd)} />
      <MonitorContextProvider
        config={{
          rollbarKey: "23b8e46f18bd4eecaee8855d44148de4",
          rollbarEnv: "testenv",
          debug: true,
          fundebugKey:
            "021cb0b41feaa3c55598f98729163e115a4f5c53c8c6943fb7edec6d9900cec8",
          sentryOptions: {
            dsn: "https://41ab9ee3a8eb92a3bdfdb1526de176ce@o933014.ingest.us.sentry.io/4507003679145984",
          },
        }}
      >
        <Monitor>{/* Your app content */}</Monitor>
      </MonitorContextProvider>
    </div>
  );
}

export default App;

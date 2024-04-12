import type { FC, ReactNode } from "react";
import QueryClientWrapper from "./react-query";
import { MonitorContextProvider, Monitor, Button } from "@dext7r/ui";
import { t } from "@/utils";
interface MonitorProps {
  children: ReactNode;
}

function FallbackComponent() {
  return <h2>{t("uUapODir")}</h2>;
}

const MonitorPage: FC<MonitorProps> = ({ children }) => {
  return (
    <MonitorContextProvider>
      <Monitor
        config={{
          fallback: <FallbackComponent />,
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
        <QueryClientWrapper>{children}</QueryClientWrapper>
      </Monitor>
    </MonitorContextProvider>
  );
};
export default MonitorPage;

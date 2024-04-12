import React, { FC, ReactNode } from "react";
import { useMonitorContext } from "./MonitorContext";
import FundebugMonitor, { FundebugMonitorProps } from "./compontns/Fundebug";
import RollbarMonitor, { RollbarMonitorProps } from "./compontns/Rollbar";
import SentryMonitor, { SentryMonitorProps } from "./compontns/Sentry";

export interface MonitorPropsConfig {
  config?: FundebugMonitorProps & RollbarMonitorProps & SentryMonitorProps;
}

export interface MonitorProps extends MonitorPropsConfig {
  fundebug?: ReactNode;
  rollbar?: ReactNode;
  sentry?: ReactNode;
  className?: string;
  children?: ReactNode;
}

const Monitor: FC<MonitorProps> = ({
  fundebug,
  rollbar,
  sentry,
  children,
  className,
  config,
}) => {
  const { monitorType, config: monitorConfig } = useMonitorContext();

  const configValue = {
    ...monitorConfig,
    ...config,
  };
  const monitorContent = (() => {
    switch (monitorType) {
      case "fundebug":
        return (
          <FundebugMonitor {...configValue}>
            {fundebug || children}
          </FundebugMonitor>
        );
      case "rollbar":
        return (
          <RollbarMonitor {...configValue}>
            {rollbar || children}
          </RollbarMonitor>
        );
      case "sentry":
        return (
          <SentryMonitor {...configValue}>{sentry || children}</SentryMonitor>
        );
      default:
        return (
          <SentryMonitor {...configValue}>
            <FundebugMonitor {...configValue}>
              {fundebug}
            </FundebugMonitor>
            <RollbarMonitor {...configValue}>
              {rollbar}
            </RollbarMonitor>
            {sentry || children}
          </SentryMonitor>
        );
    }
  })();

  return <div className={className}>{monitorContent}</div>;
};

export default Monitor;

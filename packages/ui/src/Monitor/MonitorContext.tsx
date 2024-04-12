import React, { createContext, ReactNode, useContext, useState } from 'react';
import { FundebugMonitorProps } from './compontns/Fundebug';
import { RollbarMonitorProps } from './compontns/Rollbar';
import { SentryMonitorProps } from './compontns/Sentry';

export type MonitorType = 'fundebug' | 'rollbar' | 'sentry' | 'none';

export interface MonitorContextProps {
  monitorType: MonitorType;
  setMonitorType: (type: MonitorType) => void;
  config?: FundebugMonitorProps & RollbarMonitorProps & SentryMonitorProps;
}

const MonitorContext = createContext<MonitorContextProps | undefined>(
  undefined,
);

export const useMonitorContext = () => {
  const context = useContext(MonitorContext);
  if (!context) {
    throw new Error(
      'useMonitorContext must be used within a MonitorContextProvider',
    );
  }
  return context;
};

export interface MonitorContextProviderProps {
  children: ReactNode;
  config?: FundebugMonitorProps & RollbarMonitorProps & SentryMonitorProps;
}

export const MonitorContextProvider: React.FC<MonitorContextProviderProps> = ({
  children,
  config,
}) => {
  const [monitorType, setMonitorType] = useState<MonitorType>('none');

  return (
    <MonitorContext.Provider value={{ monitorType, setMonitorType, config }}>
      {children}
    </MonitorContext.Provider>
  );
};

export default MonitorContextProvider;

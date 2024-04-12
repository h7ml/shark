import * as Sentry from "@sentry/react";
import { BrowserOptions, FallbackRender } from "@sentry/react";
import type { FC, ReactNode } from "react";
import React, { useLayoutEffect, useMemo } from "react";

/**
 * FallbackComponent 组件用于处理异常情况，当发生错误时显示提示信息
 *
 * @returns 返回一个包含提示信息的 JSX.Element 对象
 */
function FallbackComponent() {
  return <h2>{"Something went wrong."}</h2>;
}

export interface SentryMonitorProps {
  children?: ReactNode;
  sentryOptions?: BrowserOptions | undefined;
  fallback?: React.ReactElement | FallbackRender | undefined;
}

function useLInitSentry(options: BrowserOptions | undefined) {
  useLayoutEffect(() => {
    if (!sessionStorage.getItem("sentryInitialized")) {
      Sentry.init({
        integrations: [
          Sentry.browserTracingIntegration(),
          Sentry.replayIntegration({
            maskAllText: false,
            blockAllMedia: false,
          }),
        ],
        tracesSampleRate: 1.0,
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
        maxBreadcrumbs: 50,
        ...options,
      });
      sessionStorage.setItem("sentryInitialized", "true");
    }

    // 在组件卸载前清除 sessionStorage 中的标记
    return () => {
      // sessionStorage.removeItem('sentryInitialized');
    };
  }, [options]);
}

/**
 * Sentry监控组件
 *
 * @param {object} props 组件属性
 * @param {ReactNode} props.children React节点，需要被Sentry监控的子组件
 * @param {BrowserOptions} props.sentryOptions Sentry的初始化配置选项
 * @param {ReactNode} props.fallback 自定义的错误提示组件
 * @returns {React.ReactNode} 返回被Sentry监控的子组件
 */
const SentryMonitor: FC<SentryMonitorProps> = ({
  children,
  sentryOptions,
  fallback,
}) => {
  useLInitSentry(sentryOptions);

  return (
    <Sentry.ErrorBoundary fallback={fallback || FallbackComponent}>
      {children}
    </Sentry.ErrorBoundary>
  );
};

export default SentryMonitor;

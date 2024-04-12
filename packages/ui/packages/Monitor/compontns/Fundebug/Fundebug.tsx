import fundebug from "fundebug-javascript";
import "fundebug-revideo";
import React from "react";

export interface FundebugMonitorProps {
  children?: React.ReactNode;
  fundebugKey?: string;
  debug?: boolean;
}

export interface FundebugMonitorState {
  hasError: boolean;
}

class FundebugMonitor extends React.Component<
  FundebugMonitorProps,
  FundebugMonitorState
> {
  constructor(props: FundebugMonitorProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidMount() {
    const { fundebugKey, debug } = this.props;

    if (debug) {
      console.log("开启调试模式");
    }

    if (fundebugKey) {
      console.log(`fundebugKey: ${fundebugKey}`);
      fundebug.init({
        apikey: fundebugKey,
      });
      console.log("fundebug 初始化成功");
    }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ hasError: true });
    fundebug.notifyError(error, {
      metaData: {
        info: info.componentStack,
      },
    });
  }

  render() {
    if (this.state.hasError) return null;
    return <>{this.props.children}</>;
  }
}

export default FundebugMonitor;

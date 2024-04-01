import { t } from '@/utils'
import fundebug from 'fundebug-javascript'
import 'fundebug-revideo'
import React from 'react'

fundebug.init({
  apikey: '021cb0b41feaa3c55598f98729163e115a4f5c53c8c6943fb7edec6d9900cec8',
})

interface FundebugMonitorProps {
  children: React.ReactNode
}

interface FundebugMonitorState {
  hasError: boolean
}

class FundebugMonitor extends React.Component<
  FundebugMonitorProps,
  FundebugMonitorState
> {
  constructor(props: FundebugMonitorProps) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ hasError: true })
    // 将component中的报错发送到Fundebug
    fundebug.notifyError(error, {
      metaData: {
        info: info.componentStack,
      },
    })
  }

  render() {
    if (this.state.hasError)
      return null
    // Note: 也可以在出错的component处展示出错信息，返回自定义的结果。

    return <>{this.props.children}</>
  }
}

export default FundebugMonitor

import { SmileOutlined } from '@ant-design/icons'
import {
  ApiHeader as Header,
  siteSelectors,
  useSiteStore,
} from 'dumi-theme-antd-style'
import type { FC } from 'react'
import React, { memo } from 'react'

const ApiHeader: FC = memo(() => {
  const props = useSiteStore(siteSelectors.apiHeader)
  // eslint-disable-next-line react/prop-types
  const { pkg } = props

  const packages = [
    {
      label: 'icon',
      icon: <SmileOutlined />,
      children: 'demo',
      url: `https://www.npmjs.com/package/${pkg}`,
    },
  ]

  return <Header serviceList={packages} {...props} />
})

export default ApiHeader

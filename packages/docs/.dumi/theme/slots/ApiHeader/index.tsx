import { SmileOutlined } from '@ant-design/icons';
import { ApiHeader as Header, siteSelectors, useSiteStore } from 'dumi-theme-antd-style';
import React from 'react';
import { FC, memo } from 'react';

const ApiHeader: FC = memo(() => {
  const props = useSiteStore(siteSelectors.apiHeader);
  const { pkg } = props;

  const packages = [
    {
      label: 'icon',
      icon: <SmileOutlined />,
      children: 'demo',
      url: `https://www.npmjs.com/package/${pkg}`,
    },
  ];

  return <Header serviceList={packages} {...props} />;
});

export default ApiHeader;


import { usePCScreen } from '@/hooks/use-pc-screen';
import { Outlet } from "react-router-dom"

import { Suspense, useEffect } from 'react';

import { useGlobalStore } from '@/models/global';

import Slide from '@/layouts/slide';
import { Loading } from '@/component/loading';
import Header from '@/layouts/header';

const BasicLayout: React.FC = () => {

  const isPC = usePCScreen();


  const {
    darkMode,
    collapsed,
  } = useGlobalStore(
    ({
      darkMode,
      collapsed,
      setDarkMode,
      setCollapsed,
    }) => ({
      darkMode,
      collapsed,
      setDarkMode,
      setCollapsed,
    })
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [darkMode])

  return (
    <div className='bg-primary overflow-hidden'>
      <Header />
      <Slide />
      <div
        className='mt-[80px] w-[100%] bg-container !<lg:ml-[16px]'
        style={{
          borderRadius: '8px',
          marginLeft: collapsed ? 112 : 280,
          minHeight: 'calc(100vh - 80px)',
          transition: "margin 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
          width: `calc(100vw - ${isPC ? collapsed ? 112 : 280 : 32}px)`
        }}
      >
        <div
          className='m-0 rounded-md z-1 p-[16px]'
        >
          <Suspense
            fallback={(
              <Loading />
            )}
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
export default BasicLayout;

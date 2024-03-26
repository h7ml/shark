import { ConfigProvider } from 'antd';
import './App.css';
import Layout from '@/layouts';
import { useStore } from '@/models/global';
import { useMemo } from 'react';
import { lightTheme, darkTheme } from '@/config/theme';

function App() {
  const darkMode = useStore((state) => state.darkMode);

  const curTheme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  return (
    <ConfigProvider theme={curTheme}>
      <div className={darkMode ? 'dark' : 'light'}>
        <Layout />
      </div>
    </ConfigProvider>
  );
}

export default App;

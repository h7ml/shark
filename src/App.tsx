import './App.css';
import { ConfigProvider, ThemeConfig } from 'antd'
import { RouterProvider } from 'react-router-dom';
import { useMemo } from 'react';
import { lightTheme, darkTheme, sharkRouter } from '@/config/theme';
import { useGlobalStore } from '@/models/global'
function App() {
  const darkMode = useGlobalStore(state => state.darkMode);

  const curTheme: ThemeConfig = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  return (
    <ConfigProvider theme={curTheme}>
      <RouterProvider router={sharkRouter} />

    </ConfigProvider>
  );
}

export default App;

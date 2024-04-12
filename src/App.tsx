import type { ThemeConfig } from "antd";
import { ConfigProvider } from "antd";
import { useEffect, useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import "@/utils/i18n";
import { useTranslation } from "react-i18next";
import { darkTheme, lightTheme, sharkRouter } from "@/config/theme";
import { useGlobalStore } from "@/store/global";
function App() {
  const { i18n } = useTranslation();
  const { darkMode, lang } = useGlobalStore();
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const curTheme: ThemeConfig = useMemo(
    () => (darkMode ? darkTheme : lightTheme),
    [darkMode],
  );
  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [darkMode]);

  return (
    <ConfigProvider theme={curTheme}>
      <RouterProvider router={sharkRouter} />
    </ConfigProvider>
  );
}

export default App;

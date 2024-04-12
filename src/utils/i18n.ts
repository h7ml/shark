import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enUS from "@/assets/locales/en-US.json";
import zhCN from "@/assets/locales/zh-CN.json";
import { defaultSetting } from "@/default-setting";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enUS,
      },
      zh: {
        translation: zhCN,
      },
    },
    lng: defaultSetting.defaultLang || "zh",
    fallbackLng: defaultSetting.defaultLang || "zh",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export function t(key: string) {
  return i18n.t(key) || key;
}

export { i18n };
export default i18n;

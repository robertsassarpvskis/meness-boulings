import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all translation files
import lvCommon from './locales/lv/translation.json';
import enCommon from './locales/en/translation.json';
import ruCommon from './locales/ru/translation.json';
import lvHome from './locales/lv/home.json';
import enHome from './locales/en/home.json';
import ruHome from './locales/ru/home.json';

i18n.use(initReactI18next).init({
  resources: {
    lv: {
      translation: lvCommon,
      home: lvHome
    },
    en: {
      translation: enCommon,
      home: enHome
    },
    ru: {
      translation: ruCommon,
      home: ruHome
    }
  },
  lng: localStorage.getItem('lang') || 'lv',
  fallbackLng: 'lv',
  ns: ['translation', 'home'], // Specify namespaces
  defaultNS: 'translation',
  interpolation: {
    escapeValue: false,
  }
});

export default i18n;
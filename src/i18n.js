import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ua from './locales/ua.json';
import cz from './locales/cz.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ua: { translation: ua },
    cz: { translation: cz }
  },
  lng: 'en', // Язык по умолчанию
  fallbackLng: 'en', // Резервный язык, если перевод не найден
  interpolation: {
    escapeValue: false // Отключаем экранирование HTML
  }
});

export default i18n;
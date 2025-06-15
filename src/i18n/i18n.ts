import i18n, { TFunction } from 'i18next';

import HttpBackend, { HttpBackendOptions } from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { apiSettings } from '../api/settings.ts';

const callBack = (error: unknown, t: TFunction) => {
  if (error) {
    console.error(error);
    console.error(t);
  }
};

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init<HttpBackendOptions>(
    {
      lng: 'sl',
      load: 'currentOnly',
      fallbackLng: ['en', 'sl'],
      //debug: process.env.NODE_ENV === 'development',
      debug: true,
      ns: 'translation',
      interpolation: {
        escapeValue: false,
      },
        partialBundledLanguages: true, // ✅ add this
        backend: {
        loadPath: apiSettings.API_URL + '/static/locales/{{lng}}/{{ns}}.json',
        crossDomain: true,
      },
    },
    callBack,
  );

export default i18n;

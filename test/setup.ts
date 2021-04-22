/* eslint-disable import/no-extraneous-dependencies */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommonTranslations from "../public/static/locales/en/common.json";
import frCommonTranslations from "../public/static/locales/fr/common.json";

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    debug: true,

    interpolation: {
        escapeValue: false, // not needed for react!!
    },

    resources: {
        en: { translations: enCommonTranslations },
        fr: { translations: frCommonTranslations },
    },
    react: {
        useSuspense: true,
    },
});

export default i18n;

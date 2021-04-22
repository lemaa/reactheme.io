
import React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "@Style/base/theme";
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { AppSettingsProvider } from "@Context/index";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
    (Story) => (
        <AppSettingsProvider>
            <I18nextProvider i18n={i18n}>
                <RouterContext.Provider value={{
                    push: () => Promise.resolve(),
                    replace: () => Promise.resolve(),
                    prefetch: () => Promise.resolve()
                }}>
                    <Head>
                        <title>stories </title>
                        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                    </Head>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Story />
                    </ThemeProvider>
                </RouterContext.Provider>
            </I18nextProvider >
        </AppSettingsProvider>

    ),
];

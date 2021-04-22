import React from "react";
// import PropTypes from "prop-types";
import type { AppProps } from "next/app";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { AppSettingsProvider, useAppSettings } from "@Context/index";
import theme from "@Style/base/theme";
import "@Style/global.scss";
import { ThemesConsts } from "@Constant/index";

const MyApp = ({ Component, pageProps }: AppProps) => {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            if (jssStyles.parentElement !== null) {
                jssStyles.parentElement.removeChild(jssStyles);
            }
        }
    }, []);
    const Main = () => {
        const { state } = useAppSettings();
        const mainTheme = state.theme.main;
        theme.palette.background.default = ThemesConsts[mainTheme].palette.background.default;
        return (
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        );
    };
    return (
        <>
            <Head>
                <title>React Theme</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <AppSettingsProvider>
                <Main />
            </AppSettingsProvider>
        </>
    );
};

// MyApp.propTypes = {
//     Component: PropTypes.elementType.isRequired,
//     pageProps: PropTypes.instanceOf(Object).isRequired,
// };

export default appWithTranslation(MyApp);

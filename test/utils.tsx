/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import { AppSettingsProvider } from "@Context/index";
import { I18nextProvider } from "react-i18next";
import theme from "@Style/base/theme";
import i18n from "./setup";

const Providers = ({ children }: { children: React.ReactElement }) => {
    return (
        <AppSettingsProvider>
            <I18nextProvider i18n={i18n}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </I18nextProvider>
        </AppSettingsProvider>
    );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "queries">) => render(ui, { wrapper: Providers as React.ComponentType, ...options });

export * from "@testing-library/react";
export { customRender as render };

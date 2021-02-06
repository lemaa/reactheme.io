import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "@Style/base/theme";

const Providers = ({ children }: { children: React.ReactElement }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "queries">) => render(ui, { wrapper: Providers as React.ComponentType, ...options });

export * from "@testing-library/react";
export { customRender as render };

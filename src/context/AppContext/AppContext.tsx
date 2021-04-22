import * as React from "react";
import { AppSettingsConsts } from "@Constant/index";

type Action = { type: "edit"; layout?: any; theme?: any };
type Dispatch = (action: Action) => void;
type State = typeof AppSettingsConsts;
type AppSettingsProviderProps = { children: React.ReactNode };

const AppSettingsStateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

function AppSettingsReducer(state: State, action: Action) {
    switch (action.type) {
        case "edit": {
            const NewState: State = {
                layout: action.layout ? action.layout : state.layout,
                theme: action.theme ? action.theme : state.theme,
            };
            return NewState;
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function AppSettingsProvider({ children }: AppSettingsProviderProps) {
    const [state, dispatch] = React.useReducer(AppSettingsReducer, AppSettingsConsts);
    const value = { state, dispatch };
    return <AppSettingsStateContext.Provider value={value}>{children}</AppSettingsStateContext.Provider>;
}

function useAppSettings() {
    const context = React.useContext(AppSettingsStateContext);
    if (context === undefined) {
        throw new Error("useCount must be used within a CountProvider");
    }
    return context;
}

export { AppSettingsProvider, useAppSettings };

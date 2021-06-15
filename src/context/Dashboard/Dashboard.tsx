import * as React from "react";

type Action = { type: "FETCH_DATA"; payload: any };
type Dispatch = (action: Action) => void;
type State = any;
type DashboardProviderProps = { children: React.ReactNode };

const DashboardStateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const initialState: object = {};

function DashboardReducer(state: State, action: Action) {
    switch (action.type) {
        case "FETCH_DATA": {
            return { ...state, ...action.payload };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function DashboardProvider({ children }: DashboardProviderProps) {
    const [state, dispatch] = React.useReducer(DashboardReducer, initialState);
    const value = { state, dispatch };
    return <DashboardStateContext.Provider value={value}>{children}</DashboardStateContext.Provider>;
}

function useDashboard() {
    const context = React.useContext(DashboardStateContext);
    if (context === undefined) {
        throw new Error("used must be used within a DashboardProvider");
    }
    return context;
}

export { DashboardProvider, useDashboard };

import * as React from "react";

type Action = { type: "FETCH_DATA"; payload: any };
type Dispatch = (action: Action) => void;
type State = any;
type TaskProviderProps = { children: React.ReactNode };

const TaskStateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const initialState: object = {};

function TaskReducer(state: State, action: Action) {
    switch (action.type) {
        case "FETCH_DATA": {
            return { ...state, ...action.payload };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function TaskProvider({ children }: TaskProviderProps) {
    const [state, dispatch] = React.useReducer(TaskReducer, initialState);
    const value = { state, dispatch };
    return <TaskStateContext.Provider value={value}>{children}</TaskStateContext.Provider>;
}

function useTask() {
    const context = React.useContext(TaskStateContext);
    if (context === undefined) {
        throw new Error("used must be used within a TaskProvider");
    }
    return context;
}

export { TaskProvider, useTask };

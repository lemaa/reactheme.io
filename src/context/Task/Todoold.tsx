import * as React from "react";

type Action = { type: "FETCH_DATA"; payload: any };
type Dispatch = (action: Action) => void;
type State = any;
type TodoProviderProps = { children: React.ReactNode };

const TodoStateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const initialState: object = {};

function TodoReducer(state: State, action: Action) {
    switch (action.type) {
        case "FETCH_DATA": {
            return { ...state, ...action.payload };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function TodoProvider({ children }: TodoProviderProps) {
    const [state, dispatch] = React.useReducer(TodoReducer, initialState);
    const value = { state, dispatch };
    return <TodoStateContext.Provider value={value}>{children}</TodoStateContext.Provider>;
}

function useTodo() {
    const context = React.useContext(TodoStateContext);
    if (context === undefined) {
        throw new Error("used must be used within a TodoProvider");
    }
    return context;
}

export { TodoProvider, useTodo };

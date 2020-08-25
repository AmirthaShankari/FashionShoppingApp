import React, { useReducer } from "react";

/**
 * Function to create context and Provider
 * @param reducer - Function to update the context state
 * @param initialState - Initial state of the context
 * @param actions - Action creaters to dispatch actions to update the state
 * @returns Obj -  Context and Provider
 */
export default (reducer, initialState, actions) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        // Binding Actions
        const bindAction = {};
        const keys = Object.keys(actions);
        for (let key of keys) {
            bindAction[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state: state, ...bindAction }}>
                {children}
            </Context.Provider>
        );
    };

    return { Context, Provider };
};

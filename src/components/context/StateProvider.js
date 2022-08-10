import React , {createContext, useContext, useReducer } from "react";

// prepares the data layer
export const StateContext = createContext();

// function that wraps our app to provide the dataLayer
// to all the component that are wrapped inside
export const StateProvider = ({ reducer , 
    initialState, children}) => (
        <StateContext.Provider value= {useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
// pull information from data layer
export const useStateValue = () => useContext(StateContext);
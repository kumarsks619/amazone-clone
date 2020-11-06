import { createContext, useReducer } from 'react'


export const StateContext = createContext()


//following function will create a Provider Comp for the Context created above
//and the value of the Provider is a useReducer() hook itself
export const StateProvider = ({ reducer, initState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initState)}>
        {children}
    </StateContext.Provider>
)
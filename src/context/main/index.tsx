import React, {createContext, useContext, useReducer } from 'react'

const MainCtx = createContext({})

export const CtxProvider = ({children}) => {

    const initialState = {
        testString : 'www'
    }

    const reducer = (state, action) => {
        switch(action.type) {
            case 'changeString': 
            return {
                ...state,
                testString: action.value
            }
        }   

    }

    return (
        <MainCtx.Provider value={(useReducer(reducer, initialState))} >
            {children}
        </MainCtx.Provider>
    )
}

export const useCtxValue = () => useContext(MainCtx)
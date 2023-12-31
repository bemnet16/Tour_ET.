import { type } from "@testing-library/user-event/dist/type";
import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
            break;
        case 'LOGOUT':
            return { user: null }
            break;
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, { user: null })
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        
        if (user) {
            dispatch({ type: "LOGIN", payload:user })
          
        }
      
    },[])
    return (
        <AuthContext.Provider value={{ ...state, dispatch }} >
            {children}
        </AuthContext.Provider>
    )
}
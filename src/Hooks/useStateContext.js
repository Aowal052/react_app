import React, { createContext, useContext, useEffect, useState } from "react";

export const stateContext = createContext();
const getFreshContext = () =>{
    if(localStorage.getItem('context')===null){
        localStorage.setItem('context',JSON.stringify(
            {
                token:""
            })
        )
    }
    return JSON.parse(localStorage.getItem('context'))
}

export default function useStateContext(){
    const {context, setContext} = useContext(stateContext)
    return {
        context,
         setContext: Obj=> {setContext({...context,...Obj })}
        };
}
export function ContextProvider({children}){
    const [context, setContext] = useState(getFreshContext())
    useEffect(() =>{
        localStorage.setItem('context',JSON.stringify(context))
    })
    return(
        <stateContext.Provider value={{context, setContext}}>
            {children}
        </stateContext.Provider>
    )
}
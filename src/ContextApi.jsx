import React, { createContext, useState } from 'react'
export const Context_app = createContext();

export const ContextApi = (props) => {
    let [user, setUser] = useState({});
    
    const handleUser = (val) => {
        setUser(val);
    }
    return <Context_app.Provider value={{user, handleUser }}>
        {props.children}
    </Context_app.Provider>
}

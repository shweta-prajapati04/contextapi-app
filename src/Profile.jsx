import React, { useCallback, useContext } from 'react'
import { Context_app } from './ContextApi'
export const Profile = () => {
    let { user } = useContext(Context_app);
    return (
        <>
            <div >
                {user ? (<div><h4>Name:{user.name}</h4><h4>Email:{user.email}</h4><h4>password:{user.password}</h4></div>
                ) : null}
            </div>
        </>
    )
}

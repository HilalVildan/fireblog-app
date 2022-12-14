import React, { createContext, useEffect, useState } from 'react'
import { userObserver } from '../helpers/firebase';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] =useState(true)

    useEffect(() => {
      userObserver(setCurrentUser);
    }, []);

  return (
    <AuthContext.Provider value={{ currentUser}}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
import { onAuthStateChanged } from "@firebase/auth";
import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState({});

  useEffect(() => {
    const unSubs = onAuthStateChanged(auth, (user) => {
      setCurrUser(user);
      
    });
    return () => {
      unSubs();
    };
  }, []);

 
     return <AuthContext.Provider value={{ currUser }}>{children}</AuthContext.Provider>
  
};

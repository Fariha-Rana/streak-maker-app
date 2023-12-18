"use client"
import { createContext, useState, useLayoutEffect} from "react";
import userAuth from "@/appwrite/authentication";
export const AuthContext = createContext(null)

export default function AuthProvider({children}) {
  const [authStatus, setAuthStatus] = useState(false);
  useLayoutEffect(() => {
    async function checkLogInStatus(){
     try{
      const isLogIn = await userAuth.isLoggedIn();
      if(isLogIn) setAuthStatus(true)
     }catch(err){ 
     }
    }
    checkLogInStatus()
  }, [])
  return (
    <AuthContext.Provider value={{ authStatus, setAuthStatus}}>
    {children}
    </AuthContext.Provider>
  );
}
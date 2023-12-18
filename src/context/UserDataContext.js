'use client'
import { createContext, useState, useEffect} from "react";
import userAuth from "@/appwrite/authentication";
import useAuth from "./useAuth";
export const UserDataContext= createContext(null)

export default function UserDataProvider({children}) {
  const [userData, setUserData] = useState(null);
  const {authStatus } = useAuth()
  useEffect(() => {
    async function getData(){
     try{
        const data = await userAuth.getCurrentUser()
        if (data) setUserData(data)
     }catch(err){
     }
    }
    getData()
  }, [authStatus])
  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
    {children}
    </UserDataContext.Provider>
  );
}
'use client'
import {useContext} from "react";
import { UserDataContext } from "./UserDataContext";

 const useGetUserData = () => {
    return useContext(UserDataContext);
}
 export default useGetUserData;
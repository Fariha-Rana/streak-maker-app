'use client'
import userAuth from "@/appwrite/authentication";
import useAuth from "@/context/useAuth";

const LogoutPage = () => {
    const {setAuthStatus} = useAuth();
       async function _logOut(e){
        e.preventDefault()
        await userAuth.logOut()
         setAuthStatus(false);
       }
    return(
        <button className="border-gray-800  border rounded-md bg-primary px-3 py-2 text-base font-semibold text-gray-600  hover:bg-gray-200/90" onClick={_logOut}>↩ log out</button>
    )
}


export default LogoutPage;
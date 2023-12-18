"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuth from "@/context/useAuth";
function signUplayout({ children }) {
  const router = useRouter();
  const { authStatus} = useAuth();
  useEffect(() => {
      if (authStatus) router.replace("/");
  }, []);
  
  return (
    <>
       { children }
    </>
  );
}

export default signUplayout;

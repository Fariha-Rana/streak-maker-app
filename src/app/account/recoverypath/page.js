'use client';
import InputBox from "@/components/InputBox";
import userAuth from "@/appwrite/authentication";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const PasswordRecoveryPath = () => {
  const [password, setpassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [status, setStatus] = useState("");

  const serachParam = useSearchParams();
  const userid = serachParam.get('userId')
  const secret = serachParam.get('secret')
  const router = useRouter();

  const _recover = async (e) => {
    e.preventDefault();
    try {
        if(password !== repeatPassword){ 
            setStatus("❌ passwords don't match") 
            return;
        }
        setStatus("updating.....")
      await userAuth.passwordRecoveryPath(userid, secret, password, repeatPassword);
      router.replace("/account/login")
    } catch (error) {
      setStatus("❌" + error.message);
    }
  };

  return (
    <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
               <p className="text-red-500 text-base font-semibold">{status && status}</p>
               <br/>
               <br/>
              <form onSubmit={_recover}>
                <InputBox
                  onDataChange={(e) => setpassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="enter new password"
                  value={password}
                />
                  <InputBox
                  onDataChange={(e) => setRepeatPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="repeat your password"
                  value={repeatPassword}
                />
                <div className="mb-10">
                  <input
                    type="submit"
                    value="update password"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium text-gray-700 transition hover:bg-opacity-90 border-gray-500"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordRecoveryPath;

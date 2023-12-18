"use client";
import InputBox from "@/components/InputBox";
import userAuth from "@/appwrite/authentication";
import { useState } from "react";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const _onChange = async (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const _recover = async (e) => {
    e.preventDefault();
    try {
      setStatus("")
      await userAuth.passwordRecovery(email);
      setStatus("✅ check your email")
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
               <span className="text-yellow-800">{!status && "You will get an email to update your password"}</span>
               <br/>
               <br/>
              <form onSubmit={_recover}>
                <InputBox
                  onDataChange={_onChange}
                  type="email"
                  name="email"
                  placeholder="enter your Email"
                  value={email}
                />
                <div className="mb-10">
                  <input
                    type="submit"
                    value="send me email"
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

export default PasswordRecovery;

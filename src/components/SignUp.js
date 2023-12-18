'use client';
import Link from "next/link";
import InputBox from "./InputBox";
import userAuth from "@/appwrite/authentication";
import useAuth from "@/context/useAuth";
import { useRouter} from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [status, setStatus] = useState("");
  const { setAuthStatus } = useAuth();
  const router = useRouter();

  const _onChange = async (e) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const userAccount = await userAuth.createAccount(formData);
      if (userAccount) setAuthStatus(true);
      router.replace(`/`)
    } catch (err) {
      setStatus("❌" + err.message);
    }
  };

  return (
    <section className="bg-gray-1 py-20 dark:bg-dark lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-gray-200 px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
            <p className="text-red-600 text-base font-semibold">{status && status}</p>
              <p className="text-base m-4">
                <span className="pr-0.5">{"already have an account?"}</span>
                <Link href="/account/login" className="text-primary underline">
                  log in here
                </Link>
              </p>
              <form onSubmit={createUser}>
              <InputBox
                  onDataChange={_onChange}
                  type="name"
                  name="name"
                  placeholder="name"
                  value={formData.name}
                />
                <InputBox
                  onDataChange={_onChange}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                />
                <InputBox
                  onDataChange={_onChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                />
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Create account"
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

export default SignUp;

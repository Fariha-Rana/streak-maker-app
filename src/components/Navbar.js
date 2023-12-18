"use client";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import LogoutPage from "./Logout";
const Navbar = () => {
  const { authStatus } = useAuth();

  return (
    <header className={`flex w-screen pb-4 items-center sm:text-sm bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-teal-600 via-slate-300 to-pink-800`}>
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-center">
          <div className="flex w-screen items-center justify-between px-4">
            <div>
              <nav
              className="lg:ml-12 mt-4 border border-gray-200 px-3 rounded-xl"
              >
                <ul>
                  <ListItem NavLink="/">Home🏠</ListItem>
                </ul>
              </nav>
            </div>
            <div className=" justify-end mt-4 lg:mr-8 pr-2 sm:flex-row lg:pr-0">
              {authStatus ? (
                <LogoutPage />
              ) : (
                <>
                  {" "}
                  <Link
                    href="/account/login"
                    className="px-3 py-2 md:m-2 mr-5 rounded-md text-base font-semibold text-gray-700 hover:bg-gray-200/90 border border-gray-200"
                  >
                    Log in ↪
                  </Link>
                  <Link
                    href="/account/signup"
                    className="rounded-md px-3 py-2  text-base font-semibold text-gray-700  hover:bg-gray-200/90 border border-gray-200"
                  >
                    Sign Up ↪
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <Link
          href={NavLink}
          className="flex py-2 text-base text-center font-thick text-body-color hover:text-dark  hover:text-gray-400  lg:inline-flex"
        >
          {children}
        </Link>
      </li>
    </>
  );
};

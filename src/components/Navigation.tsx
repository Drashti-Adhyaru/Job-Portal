"use client";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axios from "axios";

const Navigation = async () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
 const [user, setUser] = useState<any>([]);
 useEffect(() => {
  async function getUser() {
    try {
      const user = await axios.get("/api/users/me");
      if (user.status === 200) {
        console.log(user.data.data); // Make sure the data structure is as expected
        setUser(user.data.data); // Set the fetched data to the state
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  }

  getUser();
}, []);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <nav
        className="flex items-center justify-between p-.5 lg:px-8  backdrop-blur-3xl   z-50 w-full fixed"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-20 w-auto" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
        <Link
            href="/"
            className={`
              ${pathname == "/"
                ? "text-sm font-bold leading-6 text-gray-900 "
                : "text-sm font-semibold leading-6 text-gray-500"} ${user.role == "user"?"block":"hidden"}
            `}
          >
            Home
          </Link>
          <Link
            href="/employer/dashboard"
            className={`
              ${pathname == "/employer/dashboard"
                ? "text-sm font-bold leading-6 text-gray-900 "
                : "text-sm font-semibold leading-6 text-gray-500"} ${user.role == "employer"?"block":"hidden"}
            `}
          >
            Home
          </Link>
          <Link
            href="/user/appliedList"
            className={`
              ${pathname == "/user/appliedList"
                ? "text-sm font-bold leading-6 text-gray-900 "
                : "text-sm font-semibold leading-6 text-gray-500"} ${user.role == "user"?"block":"hidden"}
            `}
          >
            Applied List
          </Link>
          <Link
            href="/employer/requestList"
            className={`
              ${pathname == "/employer/requestList"
                ? "text-sm font-bold leading-6 text-gray-900 "
                : "text-sm font-semibold leading-6 text-gray-500"} ${user.role == "employer"?"block":"hidden"}
            `}
          >
            Requests List
          </Link>
        </div>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
        <div className="lg:flex lg:flex-1 lg:justify-end">
        <a href="/login"  className={`${user._id == ""||undefined ? "block":"hidden"} text-sm font-semibold leading-6 text-gray-900`}>
            Log in <span aria-hidden="true">&rarr;</span>
          </a>

          <button className={`${user._id != ""||undefined ? "block":"hidden"}`} onClick={logout} > Logout <span aria-hidden="true">&rarr;</span></button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-opacity-6 backdrop-blur-3xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className={
                    pathname == "/"
                      ? "-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-500 "
                      : "-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-500 hover:bg-gray-500"
                  }
                >
                  Home
                </Link>
                <Link
                  href="/user/appliedList"
                  className={
                    pathname == "/user/appliedList"
                      ? "-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-500 "
                      : "-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-500 hover:bg-gray-500"
                  }
                >
                  Applied List
                </Link>

                <Link
                  href="/register"
                  className={
                    pathname == "/register"
                      ? "-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-500 "
                      : "-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-500 hover:bg-gray-500"
                  }
                >
                  Register
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>

      {/* <nav className="bg-gray-900 p-4 flex justify-between items-center">
  <div className="logo">
    <img src="logo.png" alt="Logo" className="w-24 h-24 object-contain" />
  </div>
  <ul className="flex">
    <li className="mx-2">
      <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>
    </li>
    <li className="mx-2">
      <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">Login</Link>
    </li>
    <li className="mx-2">
      <Link href="/register" className="text-sm font-semibold leading-6 text-gray-900">Register</Link>
    </li>
    <li className="mx-2">
      <Link href="/user/dashboard" className="text-sm font-semibold leading-6 text-gray-900">User Dashboard</Link>
    </li>

    <li className="mx-2">
      <Link href="/user/applyjob" className="text-sm font-semibold leading-6 text-gray-900">Apply Job</Link>
    </li>

    <li className="mx-2">
      <Link href="/employer/dashboard" className="text-sm font-semibold leading-6 text-gray-900">Employer Dashboard</Link>
    </li>
    <li className="mx-2">
      <Link href="/employer/addjob" className="text-sm font-semibold leading-6 text-gray-900">Add Job</Link>
    </li>
  </ul>
</nav> */}
    </>
  );
};
export default Navigation;

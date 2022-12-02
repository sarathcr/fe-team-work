import Link from "next/link";
import React, { useState } from "react";

import { useAuth } from "../../context/authContext";
import "./index.module.scss";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<any>(null);
  const { login }: any = useAuth();

  async function submitHandler() {
    // e.stopPropagation();
    if (!email || !password) {
      setError("please enter email and password");
      return;
    }
    if (email && password) {
      try {
        return await login(email, password).then(() => {
          // router.push("dashboard/user");
        });
      } catch (err: any) {
        setError(err?.message);
        console.log(err?.message);
      }
    }
  }

  return (
    <>
      <h1 className="text-xl font-extrabold mb-5">Sign in to FE Team Tracker</h1>
      <p>
        New user?
        <Link href="/auth/register">
          <span className={`text-primary font-extrabold cursor-pointer duration-300 hover:scale-110`}>{` Create an account`}</span>
        </Link>
      </p>
      <form className="mt-2 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        {error && <div className="w-full border border-solid border-rose-400 text-rose-400 py-2 text-center">{error}</div>}
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="mb-5">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-end">
          <div className="text-sm">
            <Link href="/auth/forgot-password">
              <span className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</span>
            </Link>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={submitHandler}
          >
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}

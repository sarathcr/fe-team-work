import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "../../context/authContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<any>(null);
  const { signUp, currentUser }: any = useAuth();

  // console.log("currentUser====>", currentUser);

  async function submitHandler() {
    // e.stopPropagation();
    if (!email || !password) {
      setError("please enter email, password and confirm password");
      return;
    } else {
      try {
        await signUp(email, password);
      } catch (err) {
        setError("User already registered");
      }
    }
  }
  return (
    <>
      <h1 className="text-xl font-extrabold mb-5">Create Your Account</h1>
      <p>
        Already Registered?
        <Link href="/auth/login">
          <span className={`text-primary font-extrabold cursor-pointer`}>{` Sign in to your account`}</span>
        </Link>
      </p>
      <form className="mt-2 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        {error && <div className="w-full  border border-solid border-rose-400 text-rose-400 py-2 text-center">{error}</div>}
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
          {/* <div>
            <label htmlFor="confirmPassword" className="sr-only">
              Confirm Password
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="confirm-password"
              required
              className="mt-5 relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e: any) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div> */}
        </div>

        <div>
          <button
            type="button"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={submitHandler}
          >
            Sign up
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;

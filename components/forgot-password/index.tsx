import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../../context/authContext";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<any>(null);
  const [isMailSent, setIsMailSent] = useState(false);
  const { forgotPassword }: any = useAuth();
  const { logOut }: any = useAuth();
  async function submitHandler() {
    if (email) {
      try {
        return await forgotPassword(email).then(() => setIsMailSent(true));
      } catch (err: any) {
        setError(err?.message);
      }
    }
  }
  const handleGoBack = () => {
    setIsMailSent(false);
    logOut();
    router.push("/auth/login");
  };

  const mailSent = (
    <>
      <p className="mb-5">An Email with password reset link is sent. Please click on the link and reset your password</p>
      <button
        type="button"
        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={handleGoBack}
      >
        Go back to login
      </button>
    </>
  );

  return (
    <>
      {isMailSent ? (
        mailSent
      ) : (
        <>
          <p className="font-extrabold">Forgot Password?</p>
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
            </div>

            <div>
              <button
                type="button"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={submitHandler}
              >
                Verify Email
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default ForgotPassword;

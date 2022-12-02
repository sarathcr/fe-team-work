import Link from "next/link";
import { ReactElement } from "react";
import Register from "../../../components/register";
import AuthLayout from "../../../layouts/authLayout";

const RegisterPage = () => {
  return <Register />;
};

RegisterPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout title="Hello Friend" description="Sign in to your account and start working with us!!" buttonText="Sign In" routelink={"/auth/login"}>
      {page}
    </AuthLayout>
  );
};

export default RegisterPage;

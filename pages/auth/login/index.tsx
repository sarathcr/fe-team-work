import Link from "next/link";
import { ReactElement } from "react";
import Login from "../../../components/login";
import { useAuth } from "../../../context/authContext";
import AuthLayout from "../../../layouts/authLayout";

const LoginPage = () => {
  return <Login />;
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout title="Hello Friend" description="Create your account and start working with us!!" buttonText="Sign Up" routelink={"/auth/register"}>
      {page}
    </AuthLayout>
  );
};

export default LoginPage;

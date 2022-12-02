import { ReactElement } from "react";
import ForgotPassword from "../../../components/forgot-password";
import AuthLayout from "../../../layouts/authLayout";

const ForgotPasswordPage = () => {
  return <ForgotPassword></ForgotPassword>;
};

ForgotPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout title="Forgot Your password" description="Please provide us your email, we will send you the reset link via email!!">
      {page}
    </AuthLayout>
  );
};

export default ForgotPasswordPage;

import React from "react";
import Dashboard from "../../components/dashboard";
import { useAuth } from "../../context/authContext";

const UserDashboard = () => {
  const { logOut }: any = useAuth();
  return (
    <>
      <Dashboard />
      <button type="button" onClick={logOut}>
        Logout
      </button>
    </>
  );
};

export default UserDashboard;

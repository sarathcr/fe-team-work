import React, { useContext, useState, useEffect, useRef, ReactNode } from "react";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import router from "next/router";

const AuthContext = React.createContext(null);

export interface AuthStateProps {
  children?: ReactNode;
}
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthStateProps) {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState(true);
  const userInfo = useRef();

  function signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password).then(() => router.push("/auth/login"));
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  const forgotPassword = (email: string) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        router.push("/dashboard/user");
      } else {
        router.push("/auth/login");
      }
    });
    return unSubscribe;
  }, []);
  const value: any = {
    currentUser,
    login,
    signUp,
    logOut,
    userInfo,
    forgotPassword,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

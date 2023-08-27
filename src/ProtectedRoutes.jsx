import { Outlet, Navigate } from "react-router";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

const UseAuth = () => {
  return auth && auth.currentUser;
};

const ProtectedRoutes = () => {
  const isAuth = UseAuth();
  const [gettingUser, setGettingUser] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setGettingUser(false);
    });
  }, []);

  return isAuth ? (
    <Outlet />
  ) : gettingUser ? (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;

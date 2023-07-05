import { Outlet, Navigate } from "react-router";
import { auth } from "./firebase";

const UseAuth = () => {
  return auth && auth.currentUser;
};

const ProtectedRoutes = () => {
  const isAuth = UseAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;

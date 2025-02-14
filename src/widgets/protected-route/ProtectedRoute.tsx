import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

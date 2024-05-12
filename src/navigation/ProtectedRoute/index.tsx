import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector, loggedUser } from "../../redux";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const Index: React.FC<ProtectedRouteProps> = ({ children }) => {
  const currentUser = useAppSelector(loggedUser);

  if (!currentUser) {
    return <Navigate to="/login" />;
  } else {
    return <>{children}</>;
  }
};
export default Index;

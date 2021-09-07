import React from "react";
import { Redirect, Route, RouteProps, useLocation } from "react-router-dom";
import useStore from "../store/store";

interface PrivateRouteProps extends RouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children, ...props }: PrivateRouteProps) {
  const { isAuthenticated } = useStore();

  const { pathname } = useLocation();

  if (!isAuthenticated && pathname !== "/conun-login") {
    return <Redirect to="/conun-login" />;
  }

  return <Route {...props}>{children}</Route>;
}

export default PrivateRoute;

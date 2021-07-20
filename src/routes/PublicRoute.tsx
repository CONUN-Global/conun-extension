import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import useStore from "../store/store";

interface PrivateRouteProps extends RouteProps {
  children: React.ReactNode;
}

function PublicRoute({ children, ...props }: PrivateRouteProps) {
  const { isAuthenticated } = useStore();

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...props}>{children}</Route>;
}

export default PublicRoute;

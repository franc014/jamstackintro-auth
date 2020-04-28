import React from "react";
import { navigate } from "gatsby";
import { useIdentityContext } from "react-netlify-identity";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const identity = useIdentityContext();
  const isLoggedIn = identity && identity.isLoggedIn;
  //if not logged in, go to login page
  if (!isLoggedIn && location.pathname !== "/dashboard/login") {
    navigate("/dashboard/login", { replace: true });
    return null; //in case it tries to render something before redirecting
  }
  //if logged in, just display the page
  return <Component {...rest} />;
};

export default PrivateRoute;

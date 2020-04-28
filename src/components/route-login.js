import React from "react";
import { useIdentityContext } from "react-netlify-identity";
import { navigate } from "gatsby";

const Routelogin = ({ showModal }) => {
  const identity = useIdentityContext();
  if (identity && identity.isLoggedIn) {
    navigate("/dashboard/secret", { replace: true });
  }

  return (
    <>
      <h1>Login or signup</h1>
      <button onClick={showModal}>Log In</button>
    </>
  );
};

export default Routelogin;

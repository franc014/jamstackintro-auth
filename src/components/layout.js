import React from "react";
import { Link } from "gatsby";
import "./layout.css";
import { IdentityContextProvider } from "react-netlify-identity-widget";

const Layout = ({ children }) => {
  return (
    <IdentityContextProvider url="https://jamstackintro-auth.netlify.app">
      <header>
        <Link to="/">Jamstack app</Link>
      </header>
      <main>{children}</main>
    </IdentityContextProvider>
  );
};

export default Layout;

import React from "react";

import { Link } from "gatsby";
import Layout from "../components/layout";
const IndexPage = () => {
  return (
    <Layout>
      <h1>This app rules! !!</h1>
      <p>Log in to find out why</p>
      <Link to="/dashboard">Go to the dashboard</Link>
    </Layout>
  );
};

export default IndexPage;

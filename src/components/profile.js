import React from "react";
import { Link } from "gatsby";

const Profile = () => {
  return (
    <div className="dashboard-header">
      <nav>
        <Link to="/dashboard/secret" activeClassName="active">
          Secret stuff
        </Link>
        <Link to="/dashboard/base" activeClassName="active">
          Base stuff
        </Link>
      </nav>
      <span>todo show login status</span>
    </div>
  );
};

export default Profile;

import React, { Children } from "react";
import Tiles from "../components/Tiles";
import Profile from "../components/Profile";
import "../css/dashboard.scss";
const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <Tiles />
    </div>
  );
};
export default Dashboard;

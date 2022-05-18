import React, { useState } from "react";
import { Link } from "gatsby";
import "../css/profile.scss";
import ProfilePic from "../images/image-jeremy.png";
import Data from "./data";
import GetDaily from "./getDaily";
const Profile = () => {
  const [isActive, setActive] = useState(0);

  const toggleActive = () => {
    setActive(!isActive);
  };

  const routines = [
    {
      id: 0,
      title: "Daily",
      data: GetDaily,
    },
    {
      id: 1,
      title: "Weekly",
    },
    {
      id: 2,
      title: "Monthly",
    },
  ];
  return (
    <div className="profile-wrapper">
      <div className="profile-content">
        <img src={ProfilePic} alt="Jeremy" />
        <div className="profile-report">
          <span>Report For</span>
          <h1> Jeremy Robson</h1>
        </div>
      </div>
      <div className="profile-routine">
        {routines.map((routine) => (
          <Link
            className={isActive ? "active" : null}
            to="#"
            onClick={routine.data ? toggleActive : null}
            key={routine.id}
          >
            {routine.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Profile;

import React, { useState } from "react";
import { Link } from "gatsby";
import "../css/profile.scss";
const Profile = () => {
  const [isActive, setActive] = useState(0);
  const toggleActive = () => {
    setActive(!isActive);
  };
  const routines = [
    {
      id: 0,
      title: "Daily",
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
        <img src="/static/image-jeremy.png" alt="Jeremy" />
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
            onClick={toggleActive}
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

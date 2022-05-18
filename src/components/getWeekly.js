import React from "react";
import "../css/tiles.scss";
const GetWeekly = ({ weeklyCurr, weeklyPrev, active }) => {
  return (
    <div className={`${active ? "active" : "inactive"}`}>
      <h2>{`${weeklyCurr}`}hrs</h2>
      <p>Last week -{`${weeklyPrev}`}hrs</p>
    </div>
  );
};
export default GetWeekly;

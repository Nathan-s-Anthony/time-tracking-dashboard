import React from "react";
import "../css/tiles.scss";
const GetDaily = ({ dailyCurr, dailyPrev, active }) => {
  return (
    <div className={`${active ? "active" : "inactive"}`}>
      <h2>{`${dailyCurr}`}hrs</h2>
      <p>Last week -{`${dailyPrev}`}hrs</p>
    </div>
  );
};
export default GetDaily;

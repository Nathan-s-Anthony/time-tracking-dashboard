import React, { useState } from "react";
import Data from "./data";
import { Link } from "gatsby";
import ProfilePic from "../images/image-jeremy.png";
import "../css/tiles.scss";
import IconEllipsis from "../images/icon-ellipsis.svg";
import GetDaily from "./getDaily";
import GetWeekly from "./getWeekly";
const Tiles = () => {
  const routines = useState([
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
  ]);
  // const onItemClick = () => {
  //   setActive(!isActive);
  // };
const displayData = (data, onClick) => {
  if(${onClick}.)
}
  return (
    <div className="tiles-wrapper">
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
            <Link to="#" onClick={routine.state} key={routine.id}>
              {routine.title}
            </Link>
          ))}
        </div>
      </div>
      {Data.map((tile) => (
        <div className={`tile tile-${tile.tile}`} key={tile.title}>
          <div className="tile-image">
            <img src={tile.image} alt={tile.tile} />
          </div>
          <div className="tile-content">
            <div className="tile-info">
              {/* <h4 className={isActive ? "active" : null}>{tile.title}</h4> */}
              <img src={IconEllipsis} alt="Additional Menu" />
            </div>
            <div className="tile-report">
              
              <GetDaily
                dailyCurr={tile.timeframes.daily.current}
                dailyPrev={tile.timeframes.daily.previous}
              />
              {/* <GetWeekly
                active={isWeekly}
                weeklyCurr={tile.timeframes.weekly.current}
                weeklyPrev={tile.timeframes.weekly.previous}
              /> */}
              {/* {getRoutineData.map((routinesData) => (
                <div
                  key={routinesData.class}
                  className={
                    routinesData.activeState
                      ? "active-routine"
                      : "inactive-routine"
                  }
                >
                  <h2>{routinesData.getDailyAmount}hrs</h2>

                  <p>
                    previous week-
                    {tile.routine}
                  </p>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Tiles;

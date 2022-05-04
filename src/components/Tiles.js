import React from "react";
import Data from "../data.json";
import Profile from "./Profile";
import "../css/tiles.scss";

const Tiles = () => {
  const tileImages = [
    {
      id: 0,
      url: "/static/icon-work.svg",
    },
    {
      id: 1,
      url: "/static/icon-play.svg",
    },
    {
      id: 2,
      url: "/static/icon-study.svg",
    },
    {
      id: 3,
      url: "/static/icon-exercise.svg",
    },
  ];
  return (
    <div className="tiles-wrapper">
      <Profile />
      {Data.map((tile) => (
        <div className="tile" key={tile.title}>
          <div className="tile-content">
            <div className="tile-info">
              <h4>{tile.title}</h4>
              <img src="/static/icon-ellipsis.svg" alt="Additional Menu" />
            </div>
            <div className="tile-report">
              <h2>{tile.timeframes.daily.current}hrs</h2>
              <p>Last week -{tile.timeframes.daily.previous}hrs</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Tiles;

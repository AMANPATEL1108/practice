import React from "react";

const Rooms = () => {
  return (
    <div className="roompage">
      <div className="allroomtitle">All Rooms</div>
      <div className="roompagedata">
        <div className="filterroomtype">
          <div className="filtertitile">Filter by Room Type:</div>
          <div className="filterall">All</div>
        </div>

        <div className="data">
          <div className="outer1">
            Check-In-date
            <div className="inner1">Select Check In Date</div>
          </div>
          <div className="outer2">
            Check-In-date
            <div className="inner2">Select Check In Date</div>
          </div>
          <div className="outer3">
            Check-In-date
            <div className="inner3">Select Check In Date</div>
          </div>
          <a className="homebtnsearchroom">Search Rooms</a>
        </div>
      </div>
    </div>
  );
};

export default Rooms;

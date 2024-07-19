import React from "react";
import "../App.css"; //

export const Home = () => {
  return (
    <div className="home-background">
      <div className="innerimgtext">
        <div className="welcometxt">
          Welcome to<label> Hotel</label>
        </div>
        <div className="loweimgtext">Step into a haven of comfortand care</div>
      </div>
      <div className="data">
        <div className="outer1">
          Chech-In-date
          <div className="inner1">Select Check In Date </div>
        </div>
        <div className="outer2">
          Chech-In-date
          <div className="inner2">Select Check In Date </div>
        </div>
        <div className="outer3">
          Chech-In-date
          <div className="inner3">Select Check In Date </div>
        </div>
        <a className="homebtnsearchroom">Search Room</a>
      </div>
    </div>
  );
};

export default Home;

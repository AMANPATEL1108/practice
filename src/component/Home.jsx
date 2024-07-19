import React from "react";
import "../App.css";

export const Home = () => {
  return (
    <div className="homepage">
      <div className="home-background">
        <div className="innerimgtext">
          <div className="welcometxt">
            Welcome to<label> Hotel</label>
          </div>
          <div className="loweimgtext">
            Step into a haven of comfort and care
          </div>
        </div>
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
        <a className="homebtnsearchroom">Search Room</a>
      </div>
      {/* //-----------------------------// */}

      <div className="allrm">
        <a href="">All room</a>
      </div>
      <div className="homenametitile">
        <label id="hs" htmlFor="">
          Service at{" "}
        </label>
        <label id="hh" htmlFor="">
          Hotel{" "}
        </label>
      </div>

      <div className="servicesection">
        <div className="upperservice">
          <div className="firstservice">
            img
            <div className="airconimg">
              <img src="(.../public/asset/img/hotel.webp)" alt="" />
            </div>
            <div className="txtaircon">
              <label className="firstair" htmlFor="">
                {" "}
                Air Conditing
              </label>
              <br />
              <label className="airsml" htmlFor="">
                Stay cool and comfortable through your stay with our individual
                controller inroom air conditing
              </label>
            </div>
          </div>
          <div className="secondservice">
            img
            <div className="secnimg">
              <img src="(.../public/asset/img/hotel.webp)" alt="" />
            </div>
            <div className="txtaircon">
              <label className="firstair" htmlFor="">
                {" "}
                Air Conditing
              </label>
              <br />
              <label className="airsml" htmlFor="">
                Stay cool and comfortable through your stay with our individual
                controller inroom air conditing
              </label>
            </div>
          </div>
        </div>
        <div className="lowerservice">
          <div className="upperservice">
            <div className="firstservice">
              img
              <div className="airconimg">
                <img src="(.../public/asset/img/hotel.webp)" alt="" />
              </div>
              <div className="txtaircon">
                <label className="firstair" htmlFor="">
                  {" "}
                  Air Conditing
                </label>
                <br />
                <label className="airsml" htmlFor="">
                  Stay cool and comfortable through your stay with our
                  individual controller inroom air conditing
                </label>
              </div>
            </div>
            <div className="secondservice">
              img
              <div className="secnimg">
                <img src="(.../public/asset/img/hotel.webp)" alt="" />
              </div>
              <div className="txtaircon">
                <label className="firstair" htmlFor="">
                  {" "}
                  Air Conditing
                </label>
                <br />
                <label className="airsml" htmlFor="">
                  Stay cool and comfortable through your stay with our
                  individual controller inroom air conditing
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last"><footer></footer></div>
    </div>
  );
};

export default Home;

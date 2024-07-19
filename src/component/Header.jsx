import React from "react";

export const Header = () => {
  return (
    <div>
      <div className="header">
        <label className="headertitle">Hotel Management</label>
        <div className="headerbtn">
          <a href="">Home</a>
          <a href="">Rooms</a>
          <a href="">Find My Booking</a>
          <a href="">Login</a>
          <a href="">Register</a>
        </div>
      </div>
    </div>
  );
};
export default Header;

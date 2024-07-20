import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div className="header">
        <label className="headertitle">Hotel Management</label>
        <div className="headerbtn">
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/booking">Find My Booking</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};
export default Header;

import React from "react";

const Booking = () => {
  return (
    <div>
      {" "}
      <div className="findbooking">Find My Booking</div>
      <div className="findbookinginputbtn">
        <input
          className="findbookinginput"
          placeholder="Enter your booking confirmation code"
          type="text"
          name=""
          id=""
        />
        <button className="findroombtn">Find</button>
      </div>
    </div>
  );
};

export default Booking;

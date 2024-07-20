import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home.jsx";
import Login from "./component/Login.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import Rooms from "./component/Room.jsx";
import Booking from "./component/Booking.jsx";
import Register from "./component/Register.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

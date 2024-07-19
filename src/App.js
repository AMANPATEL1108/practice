import React from "react";
import "./App.css";
import Home from "./component/Home.jsx";
import Login from "./component/Login.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

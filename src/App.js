import React from "react";
import "./App.css";
import Home from "./component/Home.jsx";
import Login from "./component/Login.jsx";
import Header from "./component/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;

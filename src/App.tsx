import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SideNavBar from "./components/Side-Navigation-Bar/SideNavBar";
import TopNavBar from "./components/Top-Navigation-Bar/TopNavBar";

function App() {
  return (
    <div className="App">
      <SideNavBar></SideNavBar>
      <TopNavBar></TopNavBar>
    </div>
  );
}

export default App;

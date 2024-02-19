import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SideNavBar from "./components/Side-Navigation-Bar/SideNavBar";
import TopNavBar from "./components/Top-Navigation-Bar/TopNavBar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <SideNavBar></SideNavBar>
      <TopNavBar></TopNavBar>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;

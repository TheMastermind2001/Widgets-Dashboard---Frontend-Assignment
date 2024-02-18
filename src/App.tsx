import React from "react";
import logo from "./logo.svg";
import "./App.css";
import image1 from "./image1.png";
import SideNavBarElements from "./components/Side-Navigation-Bar/SideNavBarElements";
import image2 from "./images/Left-side-bar-2nd-logo.png";
import image3 from "./images/Left-side-bar-3rd-logo.png";
import image4 from "./images/Left-side-bar-4th-logo.png";
import image5 from "./images/Left-side-bar-5th-logo.png";
import SideNavBar from "./components/Side-Navigation-Bar/SideNavBar";

function App() {
  return (
    <div className="App">
      {/* <div className="Side-Navigation-Bar">
        <div className="Side-Navigation-Header-Element">
          <img
            className="Side-Navigation-Header-Element-Image"
            src={image1}
            alt="Header image"
          ></img>
        </div>
        <SideNavBarElements image={image2}></SideNavBarElements>
        <SideNavBarElements image={image3}></SideNavBarElements>
        <SideNavBarElements image={image4}></SideNavBarElements>
        <SideNavBarElements image={image5}></SideNavBarElements>
      </div> */}
      <SideNavBar></SideNavBar>
    </div>
  );
}

export default App;

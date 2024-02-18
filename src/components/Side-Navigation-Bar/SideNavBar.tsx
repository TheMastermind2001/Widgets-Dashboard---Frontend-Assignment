import React from "react";
// import image1 from "./image1.png";
import SideNavBarElements from "./SideNavBarElements";
import image1 from "../../images/Left-side-bar-top-logo.png";
import image2 from "../../images/Left-side-bar-2nd-logo.png";
import image3 from "../../images/Left-side-bar-3rd-logo.png";
import image4 from "../../images/Left-side-bar-4th-logo.png";
import image5 from "../../images/Left-side-bar-5th-logo.png";
import "../../css/Side-Navigation-Bar/SideNavBar.css";
// type Props = {}

function SideNavBar() {
  return (
    <div className="Side-Navigation-Bar">
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
    </div>
  );
}

export default SideNavBar;

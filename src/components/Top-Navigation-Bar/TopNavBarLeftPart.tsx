import React from "react";
import "../../css/Top-Navigation-Bar/TopNavBarLeftPart.css";
import image1 from "../../images/Top-Nav-Bar-Home.png";
import TopNavBarLeftElements from "./TopNavBarLeftElements";
function TopNavBarLeftPart() {
  return (
    <div className="Top-Navigation-Bar-Left">
      <div className="Top-Navigation-Home-Element">
        <img
          className="Top-Navigation-Home-Element-Image"
          src={image1}
          alt="Header image"
        ></img>
      </div>
      <TopNavBarLeftElements text="Overview"></TopNavBarLeftElements>
      <TopNavBarLeftElements text="Customers"></TopNavBarLeftElements>
      <TopNavBarLeftElements text="Products"></TopNavBarLeftElements>
      <TopNavBarLeftElements text="Settings"></TopNavBarLeftElements>
    </div>
  );
}

export default TopNavBarLeftPart;

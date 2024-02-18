import React from "react";
import "../../css/Top-Navigation-Bar/TopNavBar.css";
import TopNavBarLeftPart from "./TopNavBarLeftPart";
import TopNavBarRightPart from "./TopNavBarRightPart";
function TopNavBar() {
  return (
    <div className="Top-Navigation-Bar">
      <TopNavBarLeftPart></TopNavBarLeftPart>
      <TopNavBarRightPart></TopNavBarRightPart>
    </div>
  );
}

export default TopNavBar;

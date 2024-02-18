import React from "react";
import "../../css/Top-Navigation-Bar/TopNavBarRightPart.css";
// import image1 from "../../images/Top-Nav-Bar-Home.png";
import image from "../../images/Plus-button-in-add-widget.png";
import image1 from "../../images/Settings-sign.png";
// import TopNavBarRightPart from "./TopNavBarLeftElements";
function TopNavBarRightPart() {
  return (
    <div className="Top-Navigation-Bar-Right">
      <div className="Top-Navigation-Add-Widget-Element">
        <div className="Plus-Button-Div-Add-Widget">
          <img className="Plus-Button-Add-Widget" src={image}></img>
        </div>
        <div className="Top-Navigation-Bar-Add-Widget-Element-Div">
          <h4 className="Top-Navigation-Bar-Add-Widget-Element-Text">
            Add Widget
          </h4>
          {/* <img src={image}></img> */}
        </div>
      </div>
      <img className="Setting-Sign-Add-Widget" src={image1}></img>
    </div>
  );
}

export default TopNavBarRightPart;

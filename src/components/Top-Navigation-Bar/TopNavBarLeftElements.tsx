import React from "react";
import "../../css/Top-Navigation-Bar/TopNavBarLeftElements.css";
import image from "../../images/cross-button.png";

function TopNavBarLeftElements({ text }: any) {
  return (
    <div className="Top-Navigation-Bar-Left-Element">
      <div className="Top-Navigation-Bar-Left-Element-Div">
        <h4 className="Top-Navigation-Bar-Left-Element-Text-Actual">{text}</h4>
        <img src={image}></img>
      </div>
    </div>
  );
}

export default TopNavBarLeftElements;

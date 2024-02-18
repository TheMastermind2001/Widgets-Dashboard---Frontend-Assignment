import React from "react";
import "../../css/Side-Navigation-Bar/SideNavBarElements.css";
function SideNavBarElements({ image }: any) {
  return (
    <div className="Side-Navigation-Element">
      <div className="Side-Navigation-Element-Image-Div">
        <img
          className="Side-Navigation-Element-Image"
          src={image}
          alt="Header image"
        ></img>
      </div>
    </div>
  );
}

export default SideNavBarElements;

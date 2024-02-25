import React from "react";
import "../../../css/Add-Widget/SubComponents/TopBar.css";
import image1 from "../../../images/_Nav item button.png";
import image2 from "../../../images/Multiple-Cicles-Top-Bar.png";
import image3 from "../../../images/Cross-Top-Bar-Right-Large.png";
type Props = {};

export default function TopBar({}: Props) {
  return (
    <div className="Add-Widget-Top-Bar">
      <div className="Add-Widget-Top-Bar-Left">
        <div className="Add-Widget-Top-Bar-Icon">
          <img src={image1}></img>
          <img className="Add-Widget-Multiple-Cicles" src={image2}></img>
        </div>
        <div className="Add-Widget-Top-Bar-Text">
          <h1 className="Add-Widget-Top-Bar-Text-Top">Create Widget</h1>
          <h1 className="Add-Widget-Top-Bar-Text-Bottom">
            Manage the glossary of terms of your Database
          </h1>
        </div>
      </div>
      <div className="Add-Widget-Top-Bar-Right">
        <img
          className="Add-Widget-Top-Bar-Cross"
          style={{ height: "16px", width: "16px" }}
          src={image3}
        ></img>
        <input
          type="text"
          className="Add-Widget-Top-Bar-Input"
          placeholder="Title of Widget"
        ></input>
      </div>
    </div>
  );
}

import React from "react";
import image1 from "../../../images/Save-Area-Icon-1.png";
import "../../../css/Add-Widget/SubComponents/SaveArea.css";
type Props = {};

export default function SaveArea({}: Props) {
  return (
    <div className="Add-Widget-Save-Area">
      <img src={image1}></img>
      <button className="Add-Widget-Save-Area-Cancel">Cancel</button>
      <button className="Add-Widget-Save-Area-Save">Save</button>
    </div>
  );
}

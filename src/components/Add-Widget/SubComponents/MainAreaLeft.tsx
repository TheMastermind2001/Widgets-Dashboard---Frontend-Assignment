import React from "react";
import "../../../css/Add-Widget/SubComponents/MainAreaLeft.css";
type Props = {};

export default function MainAreaLeft({}: Props) {
  return (
    <div className="Add-Widget-Main-Area-Left">
      <div className="Add-Widget-Main-Area-Left-Grid">
        <div className="item item1"></div>
        <div className="item item2"></div>
        <div className="item item3"></div>
        <div className="item item4"></div>
        <div className="item item5"></div>
        <div className="item item6"></div>
        {/* <div className="item item7"></div> */}
      </div>
    </div>
  );
}

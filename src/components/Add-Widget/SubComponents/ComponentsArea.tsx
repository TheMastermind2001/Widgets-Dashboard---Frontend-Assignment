import React from "react";
import "../../../css/Add-Widget/SubComponents/ComponentsArea.css";
import image1 from "../../../images/Graph-Component-Icon-11.png";
import image2 from "../../../images/Graph-Component-Icon-12.png";
import image3 from "../../../images/Graph-Component-Icon-13.png";
type Props = {};

export default function ComponentsArea({}: Props) {
  return (
    <div className="Add-Widget-Components-Area">
      <h1 className="Add-Widget-Components-Area-Heading">COMPONENTS</h1>
      <div className="Add-Widget-Components-Area-Data">
        <div className="Add-Widget-Components-Area-Data-Text">
          <h1 className="Add-Widget-Components-Area-Data-Text-1">Data</h1>
          <h1 className="Add-Widget-Components-Area-Data-Text-2">
            Random Description
          </h1>
        </div>
      </div>

      <div className="Add-Widget-Components-Area-Graph">
        <div className="Add-Widget-Components-Area-Graph-Text">
          <h1 className="Add-Widget-Components-Area-Graph-Text-1">Graph</h1>
          <h1 className="Add-Widget-Components-Area-Graph-Text-2">
            Random Description
          </h1>
          <div className="Add-Widget-Components-Area-Graph-Icons">
            {/* <div className="Add-Widget-Components-Area-Graph-Icons-Images"> */}
            <div className="Add-Widget-Components-Area-Graph-Icons-Image">
              <img src={image1} alt="" />
            </div>
            <div className="Add-Widget-Components-Area-Graph-Icons-Image">
              <img src={image2} alt="" />
            </div>
            <div className="Add-Widget-Components-Area-Graph-Icons-Image">
              <img src={image3} alt="" />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="Add-Widget-Components-Area-Summary">
        <div className="Add-Widget-Components-Area-Summary-Text">
          <h1 className="Add-Widget-Components-Area-Summary-Text-1">Summary</h1>
          <h1 className="Add-Widget-Components-Area-Summary-Text-2">
            Random Description
          </h1>
        </div>
      </div>
    </div>
  );
}

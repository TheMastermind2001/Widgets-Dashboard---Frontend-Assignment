import React from "react";
import "../../../css/Add-Widget/SubComponents/MainArea.css";
import MainAreaLeft from "./MainAreaLeft";
import ComponentsArea from "./ComponentsArea";
import SaveArea from "./SaveArea";
type Props = {};

export default function MainArea({}: Props) {
  return (
    <div className="Add-Widget-Main-Area">
      <MainAreaLeft></MainAreaLeft>
      <div className="Components-Area-And-Save">
        <ComponentsArea></ComponentsArea>
        <SaveArea></SaveArea>
      </div>
    </div>
  );
}

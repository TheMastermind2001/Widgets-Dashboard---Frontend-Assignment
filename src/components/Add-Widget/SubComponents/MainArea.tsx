import React from "react";
import "../../../css/Add-Widget/SubComponents/MainArea.css";
import MainAreaLeft from "./MainAreaLeft";
import ComponentsArea from "./ComponentsArea";
type Props = {};

export default function MainArea({}: Props) {
  return (
    <div className="Add-Widget-Main-Area">
      <MainAreaLeft></MainAreaLeft>
      <ComponentsArea></ComponentsArea>
    </div>
  );
}

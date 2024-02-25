import React from "react";
import "../../css/Add-Widget/AddWidgetScreen.css";
import TopBar from "./SubComponents/TopBar";
import MainArea from "./SubComponents/MainArea";
type Props = {};

export default function AddWidgetScreen({}: Props) {
  return (
    <div className="Add-Widget-Screen-Main">
      <TopBar></TopBar>
      <MainArea></MainArea>
    </div>
  );
}

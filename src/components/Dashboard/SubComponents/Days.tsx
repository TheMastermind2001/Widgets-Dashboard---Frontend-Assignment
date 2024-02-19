import React, { useState } from "react";
import "../../../css/Dashboard/SubComponents/Days.css";
import image from "../../../images/New folder/Frame 15.png";
import { relative } from "path";
type Props = {
  color: string;
};

function Days({ color }: Props) {
  const [selectedIdx, setSelectedIdx] = useState(1);
  return (
    <div className="Days-Div-Main">
      <div className="Days-Div">
        <div className="Days">
          <div></div>
          <h1
            style={{
              color:
                selectedIdx == 1
                  ? color != "white"
                    ? "#5E5ADB"
                    : "white"
                  : "#BBBBBB",
            }}
            onClick={() => {
              setSelectedIdx(1);
            }}
          >
            7d
          </h1>

          <h1
            style={{
              color:
                selectedIdx == 2
                  ? color != "white"
                    ? "#5E5ADB"
                    : "white"
                  : "#BBBBBB",
            }}
            onClick={() => {
              setSelectedIdx(2);
            }}
          >
            14d
          </h1>

          <h1
            style={{
              color:
                selectedIdx == 3
                  ? color != "white"
                    ? "#5E5ADB"
                    : "white"
                  : "#BBBBBB",
            }}
            onClick={() => {
              setSelectedIdx(3);
            }}
          >
            30d
          </h1>
        </div>
        <div className="Table-Three-Dots-Div">
          <img className="Table-Three-Dots" src={image}></img>
        </div>
      </div>
      <div className="Horizontal-Line-Div">
        <hr className="Horizontal-Line"></hr>
        <hr
          className="Bold-Line"
          style={{ position: "relative", left: (selectedIdx - 1) * 45 }}
        ></hr>
      </div>
    </div>
  );
}

export default Days;

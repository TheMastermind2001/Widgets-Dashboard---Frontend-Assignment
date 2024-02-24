import React, { useState } from "react";
import "../../../css/Dashboard/SubComponents/Days.css";
import image from "../../../images/New folder/Frame 15.png";
import { relative } from "path";
type Props = {
  color: string;
};

function Days({ color }: Props) {
  const idxMapBoldLine: any = {
    white: "#5E5ADB",
    "#5E5ADB": "#F1F1F2",
    "#282828": "#F1F1F2",
  };
  const idxMapTextHead: any = {
    white: "#BBBBBB",
    "#5E5ADB": "#FFFFFF",
    "#282828": "#A0A0A0",
  };
  const HRColor: any = {
    white: "#E1E1E1",
    // "#5E5ADB": "rgba(255,255,255,0.4)",
    "#5E5ADB": "rgba(225,225,225,0.4)",
    "#282828": "#363636",
  };

  const [selectedIdx, setSelectedIdx] = useState(1);
  return (
    <div className="Days-Div-Main">
      <div className="Days-Div">
        <div className="Days">
          <h1
            style={{
              color:
                selectedIdx == 1
                  ? idxMapBoldLine[color]
                  : idxMapTextHead[color],
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
                  ? idxMapBoldLine[color]
                  : idxMapTextHead[color],
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
                  ? idxMapBoldLine[color]
                  : idxMapTextHead[color],
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
        <hr
          style={{ border: "0.5px solid " + HRColor[color] }}
          className="Horizontal-Line"
        ></hr>
        <hr
          className="Bold-Line"
          style={{
            color: idxMapBoldLine[color],
            position: "relative",
            top: "-1px",
            left: (selectedIdx - 1) * 45,
          }}
        ></hr>
      </div>
    </div>
  );
}

export default Days;

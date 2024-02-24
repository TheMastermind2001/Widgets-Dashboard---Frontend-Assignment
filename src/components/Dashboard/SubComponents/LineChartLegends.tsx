import React from "react";
import { ChartData } from "../../../types";
import "../../../css/Dashboard/SubComponents/LineChartLegends.css";

type Props = {
  chartData: ChartData;
  bgcolor: string;
};

export default function LineChartLegends({ chartData, bgcolor }: Props) {
  const TextColorLineLegends: any = {
    white: "#AFAFAF",
    "#5E5ADB": "rgba(255,255,255,0.65)",
    "#282828": "#7E7E7E",
  };
  const NumberColorLineLegends: any = {
    white: "#4F4F4F",
    // white: "red",
    "#5E5ADB": "rgba(255,255,255,0.9)",
    "#282828": "#F3F3F3",
  };
  const HRColorLineLegends: any = {
    white: "#EDEDED",
    // white: "red",
    "#5E5ADB": "rgba(225,225,225,0.4)",
    "#282828": "rgba(114,114,114,0.4)",
  };
  return (
    <div className="Line-Chart-Legends">
      <hr 
        className="Line-Chart-HR"
        style={{
          backgroundColor: HRColorLineLegends[bgcolor],
          border: "1px solid " + HRColorLineLegends[bgcolor],
          
        }}
      ></hr>
      {chartData?.data.map((item: any) => {
        return (
          <div className="Line-Chart-Legend">
            <div
              style={{ backgroundColor: item.color }}
              className="Line-Chart-Legends-Color"
            ></div>
            <div className="Line-Chart-Legends-Text-Number">
              <div
                style={{ color: TextColorLineLegends[bgcolor] }}
                className="Line-Chart-Legends-Text"
              >
                {item.name}
              </div>
              <div
                style={{ color: NumberColorLineLegends[bgcolor] }}
                className="Line-Chart-Legends-Number"
              >
                {item.value}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

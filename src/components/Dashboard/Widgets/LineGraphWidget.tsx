import React from "react";
import Days from "../SubComponents/Days";
import LineChart from "../SubComponents/LineChart";
import { ChartData, LineWidgetFlexibleDimensionProps } from "../../../types";
import "../../../css/Dashboard/Widgets/LineGraphWidget.css";

import { LineWidgetProps } from "../../../types";
import LineChartLegends from "../SubComponents/LineChartLegends";

export default function LineGraphWidget({
  chartData,
  xLabelPresent,
  bgcolor,
  height,
  width,
}: LineWidgetFlexibleDimensionProps){
  return (
    <div
      className="Line-Widget"
      style={{ backgroundColor: bgcolor, width: width, height: height }}
    >
      <Days color={bgcolor}></Days>
      <div>
        <div
          style={
            height < "200px"
              ? { height: "130px", width: "160px", paddingRight: "10px" }
              : {}
          }
          className="Line-Chart"
        >
          <LineChart
            chartData={chartData as ChartData}
            xLabelPresent={xLabelPresent}
            bgcolor={bgcolor}
          ></LineChart>
        </div>
      </div>
      {xLabelPresent ? (
        // <div className="Line-Chart-Legends-Main">
        <LineChartLegends
          chartData={chartData}
          bgcolor={bgcolor}
        ></LineChartLegends>
      ) : (
        // </div>
        <></>
      )}
    </div>
  );
}

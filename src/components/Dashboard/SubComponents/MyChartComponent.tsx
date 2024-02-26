import React from "react";
import { Chart } from "react-google-charts";

type ChartDataType = (string | number)[][];

const MyChartComponent: React.FC = () => {
  const chartData: ChartDataType = [
    ["Platform", "Christmas25", "BirthdaySpecial25", "Newuser30"],
    [1, 15, 6, 20],
    [2, 11, 21, 30],
    [3, 5, 27, 11],
    [4, 9, 3, 13],
    [5, 7, 1, 28],
  ];

  return (
    <Chart
      width={"190px"}
      height={"200px"}
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={{
        chartArea: { width: "80%", height: "80%" },
        hAxis: {
          title: "",
          textPosition: "out",
          gridlines: {
            color: "rgba(70,70,70,0.1)",
            count: 2,
          },
          baselineColor: "transparent",
        },
        vAxis: {
          title: "",
          textPosition: "0px",
          gridlines: {
            color: "transparent",
          },
          baselineColor: "transparent",
          viewWindow: {
            min: 0,
            max: 50,
          },
        },
        series: {
          0: { color: "#FF8E8E", lineWidth: 3 },
          1: { color: "#5E5ADB", lineWidth: 3 },
          2: { color: "#5FDC8F", lineWidth: 3 },
        },
        legend: { position: "bottom" },
      }}
    />
  );
};

export default MyChartComponent;

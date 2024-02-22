// // Import React and useEffect
// import React, { useEffect } from "react";

// const GoogleLineChart: React.FC = () => {
//   useEffect(() => {
//     const loadGoogleCharts = () => {
//       const script = document.createElement("script");
//       script.src = "https://www.gstatic.com/charts/loader.js";
//       script.onload = () => {
//         window.google.charts.load("current", { packages: ["corechart"] });
//         window.google.charts.setOnLoadCallback(drawChart);
//       };
//       document.body.appendChild(script);
//     };

//     const drawChart = () => {
//       // Make sure to use window.google here as well
//       const data = window.google.visualization.arrayToDataTable([
//         // Your data
//       ]);

//       const options = {
//         // Your options
//       };

//       const chart = new window.google.visualization.LineChart(
//         document.getElementById("google_line_chart")
//       )
//       chart.draw(data, options);
//     };

//     loadGoogleCharts();
//   }, []);

//   return (
//     <div
//       id="google_line_chart"
//       style={{ width: "600px", height: "400px" }}
//     ></div>
//   );
// };

// export default GoogleLineChart;
import React from "react";

type Props = {};

export default function GoogleLineChart({}: Props) {
  return <div>GoogleLineChart</div>;
}

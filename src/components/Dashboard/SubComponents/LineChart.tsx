// LineChart.tsx
import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { ChartData } from "../../../types"; // Import the interface
import { CampaignData } from "../../../types";
// interface LineChartProps {
//   chartData: ChartData | undefined;
// }
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { LineWidgetProps } from "../../../types";

const LineChart: React.FC<LineWidgetProps> = ({
  chartData,
  xLabelPresent,
  bgcolor,
}) => {
  const labels = ["", "Google", "Instagram", "Facebook", "TikTok"];
  const TextColor: any = {
    white: "rgba(71,71,71,0.4)",
    "#5E5ADB": "rgba(255,255,255,0.50)",
    "#282828": "rgba(255,255,255,0.50)",
  };
  const GridColor: any = {
    white: "rgba(70,70,70,0.1)",
    "#5E5ADB": "rgba(255,255,255,0.50)",
    "#282828": "#363636",
  };
  const data = {
    labels,
    datasets:
      chartData?.data?.map((campaign: any) => ({
        label: campaign.name,
        data: Object.values(campaign.platforms),
        borderColor: campaign.color,
        backgroundColor: campaign.color,
        fill: false,
        borderWidth: 3,
        pointRadius: 0, // Remove the dots at data points
        tension: 0.03,
      })) || [],
  };

  const options = {
    scales: {
      x: {
        display: true,

        grid: {
          display: true,
          // display: xLabelPresent ? true : false,
          drawBorder: true, // Ensures the border is drawn
          // borderColor: "red", // Sets the y-axis line color to red
          // color: "transparent", // Makes horizontal gridlines transparent
          drawTicks: false,
          color: GridColor[bgcolor],
        },
        ticks: {
          display: xLabelPresent ? true : false,
          font: {
            size: 12, // Example font size, adjust as needed
            family: "Inter", // Set your desired font family here
            weight: 500,
            // color: "red", // Set your desired font color here
          },
          maxRotation: 90, // Rotate labels to 90 degrees
          minRotation: 90,
          // color: "rgba(71,71,71,0.4)",
          color: TextColor[bgcolor],
        },
      },
      y: {
        display: true,
        grid: {
          display: true,
          color: bgcolor,
          // drawBorder: false,
          // borderColor: "black",
          // color: "blue",
        },
        ticks: {
          stepSize: 10,
          callback: function (tickValue: string | number) {
            // Accept both string and number types
            const value = Number(tickValue); // Ensure 'value' is treated as a number
            // Assuming the value is in thousands for visual representation
            return `${value}k`;
          },

          font: {
            size: 12, // Example font size, adjust as needed
            family: "Inter", // Set your desired font family here
            weight: 500,
            // Set your desired font color here
          },
          color: TextColor[bgcolor],
        },
        suggestedMax: xLabelPresent ? 40 : 37,
      },
    },
    // scales: {
    //   x: {
    //     display: false, // Keep the axis "active"
    //     color: "transparent",
    //     grid: {
    //       display: true, // Show vertical grid lines
    //       drawBorder: false, // Necessary to draw the border so we can color it
    //       borderColor: "black", // Set the color of the border (axis line)
    //       // color: "rgba(70,70,70,0.1)",
    //       color: "white",
    //     },
    //     ticks: {
    //       display: false,
    //       color: "red", // Hide tick labels on the x-axis
    //     },
    //   },

    //   y: {
    //     display: true,
    //     ticks:{
    //       display: false,
    //       color: "red",
    //       // Hide tick labels on the x-axis
    //     },
    //     gridlines: {
    //       // zeroLineColor: "#white",
    //       // Make sure grid lines are displayed
    //       display: false,
    //       // Set the color of the grid lines
    //       color: "red",
    //     },
    //     suggestedMax: 40,
    //   },
    // },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} />;
};

export default LineChart;

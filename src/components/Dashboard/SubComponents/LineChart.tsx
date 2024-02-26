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
        pointRadius: 0,
        tension: 0.03,
      })) || [],
  };

  const options = {
    scales: {
      x: {
        display: true,

        grid: {
          display: true,
          drawBorder: true,
          drawTicks: false,
          color: GridColor[bgcolor],
        },
        ticks: {
          display: xLabelPresent ? true : false,
          font: {
            size: 11,
            family: "Inter",
            weight: 500,
          },
          maxRotation: 90,
          minRotation: 90,
          color: TextColor[bgcolor],
        },
      },
      y: {
        display: true,
        grid: {
          display: true,
          color: bgcolor,
        },
        ticks: {
          stepSize: 10,
          callback: function (tickValue: string | number) {
            const value = Number(tickValue);
            return `${value}k`;
          },

          font: {
            size: 11,
            family: "Inter",
            weight: 500,
          },
          color: TextColor[bgcolor],
        },
        suggestedMax: xLabelPresent ? 40 : 37,
      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} />;
};

export default LineChart;

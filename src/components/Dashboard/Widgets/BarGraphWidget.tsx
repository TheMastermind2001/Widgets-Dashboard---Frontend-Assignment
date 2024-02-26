import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Days from "../SubComponents/Days";
import "../../../css/Dashboard/Widgets/BarGraphWidget.css";

type Props = {
  data: any;
  bgcolor: string;
  height: string;
  width: string;
  limit: number;
  noradius?: boolean;
};

export default function BarGraphWidget({
  data,
  bgcolor,
  height,
  width,
  limit,
  noradius,
}: Props) {
  const TextColor: any = {
    white: "rgba(71,71,71,0.4)",
    "#5E5ADB": "rgba(255,255,255,0.50)",
    "#282828": "rgba(255,255,255,0.50)",
  };
  const chartData = {
    labels: data?.data.array.map((item: any, index: number) => {
      return index;
    }),
    datasets: [
      {
        label: "Monthly Sales",
        data: data?.data.array.map((item: any) => {
          return item.value;
        }),
        backgroundColor: data?.data.array.map((item: any) => {
          return item.color;
        }),
        barThickness: 4,
        borderRadius: {
          topLeft: 10,
          topRight: 10,
        },
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false,
        categoryPercentage: 0.4,
        barPercentage: 0.4,
        grid: {},
        ticks: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {},
        ticks: {
          stepSize: height < "200px" ? 10 : 5,
          callback: function (tickValue: string | number) {
            const value = Number(tickValue); 
            return tickValue == 0 || tickValue == "0"
              ? `${value}`
              : `${value}k`;
          },

          font: {
            size: 11,
            family: "Inter",
            weight: 500,
          },
          color: TextColor[bgcolor],
        },
        suggestedMax: limit,
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div
      style={{
        borderTopRightRadius: noradius ? "0px" : "15px",
        borderBottomRightRadius: noradius ? "0px" : "15px",
        height: height,
        width: width,
        backgroundColor: bgcolor,
      }}
      className="Bar-Widget"
    >
      <Days color={bgcolor}></Days>
      <div
        style={{ height: height > "200px" ? "340px" : "120px" }}
        className="Bar-Widget-Main"
      >
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}

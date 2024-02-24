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
};

export default function BarGraphWidget({
  data,
  bgcolor,
  height,
  width,
  limit,
}: Props) {
  const TextColor: any = {
    white: "rgba(71,71,71,0.4)",
    "#5E5ADB": "rgba(255,255,255,0.50)",
    "#282828": "rgba(255,255,255,0.50)",
  };
  const chartData = {
    // labels: ["January", "February", "March", "April", "May", "June"], // Example labels for the x-axis
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
        // borderColor: [
        //   "rgba(255, 205, 86, 1)",
        //   "rgba(255, 99, 132, 1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(54, 162, 235, 1)",
        //   "rgba(153, 102, 255, 1)",
        // ],
        // borderWidth: 1,
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
        categoryPercentage: 0.4, // 80% of the category width
        barPercentage: 0.4,
        // beginAtZero: true,
        grid: {
          //   zeroLineColor: "#ffcc33",
        },
        ticks: {
          display: false,
        },
      },
      y: {
        // display: false,
        beginAtZero: true,
        grid: {
          //   color: "black",
          //   border: "1px solid black",
          //   zeroLineColor: "#ffcc33",
        },
        ticks: {
          stepSize: height < "200px" ? 10 : 5,
          callback: function (tickValue: string | number) {
            // Accept both string and number types
            const value = Number(tickValue); // Ensure 'value' is treated as a number
            // Assuming the value is in thousands for visual representation
            return tickValue == 0 || tickValue == "0"
              ? `${value}`
              : `${value}k`;
          },

          font: {
            size: 11, // Example font size, adjust as needed
            family: "Inter", // Set your desired font family here
            weight: 500,
            // Set your desired font color here
          },
          color: TextColor[bgcolor],
        },
        suggestedMax: limit,
      },
    },
    plugins: {
      legend: {
        display: false, // Set to true if you want to display the label
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div
      style={{ height: height, width: width, backgroundColor: bgcolor }}
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

import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../../../css/Dashboard/Widgets/DoughnutGraphWidget.css";
import Days from "../SubComponents/Days";

type Props = {
  data: any;
  bgcolor: string;
};

export default function DoughnutGraphWidget({ data, bgcolor }: Props) {
  // const TextColorDoughnut: any = {
  //   white: "#AFAFAF",
  //   "#5E5ADB": "rgba(255,255,255,0.65)",
  //   "#282828": "#7E7E7E",
  // };
  useEffect(() => {
    console.log(data);
  }, [data]);
  const datanew = {
    // labels: ["Red", "Green", "Yellow", "Blue"],
    datasets: [
      {
        label: "Orders",
        data: data?.data.orders.map((item: any) => {
          return item.value;
        }),
        // Example data
        backgroundColor: data?.data.orders.map((item: any) => {
          return item.color;
        }),
        // borderColor: [
        //   "rgba(255,99,132,1)",
        //   "rgba(75, 192, 192, 1)",
        //   "rgba(255, 206, 86, 1)",
        //   "rgba(54, 162, 235, 1)",
        // ],
        borderWidth: 2,
        borderColor: bgcolor,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
    cutout: "65%", // Adjust doughnut thickness
  };

  return (
    <div style={{ backgroundColor: bgcolor }} className="Doughnut-Widget">
      <Days color={bgcolor}></Days>
      <div className="Doughnut-Chart-Main">
        <Doughnut data={datanew} options={options} />
        <div className="Doughnut-Chart-Text">
          <h1 className="Doughnut-Chart-Text-Number">
            {data?.data?.totalOrders}
          </h1>
          <h1 className="Doughnut-Chart-Text-Text">Orders</h1>
        </div>
      </div>
    </div>
  );
}

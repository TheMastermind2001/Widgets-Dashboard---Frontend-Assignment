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
  useEffect(() => {
    console.log(data);
  }, [data]);
  const datanew = {
    datasets: [
      {
        label: "Orders",
        data: data?.data.orders.map((item: any) => {
          return item.value;
        }),
       
        backgroundColor: data?.data.orders.map((item: any) => {
          return item.color;
        }),
        
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

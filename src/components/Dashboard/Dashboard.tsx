import React, { useEffect, useState } from "react";
import "../../css/Dashboard/Dashboard.css";
import Table1 from "./Widgets/Table1";
import { DashboardData } from "../../types";
import { ChartData } from "../../types";
import Summary from "./Widgets/Summary";
import LineChart from "./SubComponents/LineChart";
import GoogleLineChart from "./SubComponents/GoogleLineChart";
import MyChartComponent from "./SubComponents/MyChartComponent";
import LineGraphWidget from "./Widgets/LineGraphWidget";
import DoughnutGraphWidget from "./Widgets/DoughnutGraphWidget";
import BarGraphWidget from "./Widgets/BarGraphWidget";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../features/data/dataSlice";
const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  let data = useSelector((state: any) => state.setData.dashboardData);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  useEffect(() => {
    const storedWidgets = localStorage.getItem("dashboardDataDefault");
    console.log(storedWidgets);
    if (storedWidgets) {
      // Ensure you parse the stored string into JSON
      const parsedData: DashboardData = JSON.parse(storedWidgets);
      console.log(parsedData);
      setDashboardData(parsedData);
      dispatch(setData(parsedData));
      console.log(data);
    }
  }, [dashboardData, data, dispatch]);

  return (
    <div className="Dashboard">
      <div className="Dashboard-Elements">
        <LineGraphWidget
          chartData={dashboardData?.widgets[2] as ChartData}
          xLabelPresent={true}
          bgcolor={"#282828"}
          height={"415px"}
          width={"190px"}
        ></LineGraphWidget>
        <LineGraphWidget
          chartData={dashboardData?.widgets[3] as ChartData}
          xLabelPresent={true}
          bgcolor={"#282828"}
          height={"623px"}
          width={"190px"}
        ></LineGraphWidget>
        {/* <MyChartComponent></MyChartComponent> */}
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div>
            {/* <LineChart
              chartData={dashboardData?.widgets[2] as ChartData}
              xLabelPresent={true}
            ></LineChart> */}
            <LineGraphWidget
              chartData={dashboardData?.widgets[2] as ChartData}
              xLabelPresent={true}
              bgcolor={"white"}
              height={"415px"}
              width={"190px"}
            ></LineGraphWidget>

            <LineGraphWidget
              chartData={dashboardData?.widgets[2] as ChartData}
              xLabelPresent={false}
              bgcolor={"white"}
              height={"190px"}
              width={"190px"}
            ></LineGraphWidget>

            <DoughnutGraphWidget
              data={dashboardData?.widgets[6]}
              bgcolor="white"
            ></DoughnutGraphWidget>
            <BarGraphWidget
              data={dashboardData?.widgets[7]}
              bgcolor={"white"}
              height={"405px"}
              width={"190px"}
              limit={45}
            ></BarGraphWidget>

            <BarGraphWidget
              data={dashboardData?.widgets[8]}
              bgcolor={"#282828"}
              height={"190px"}
              width={"208px"}
              limit={40}
            ></BarGraphWidget>
            {/* <DoughnutGraphWidget
              data={dashboardData?.widgets[6]}
              bgcolor="#282828"
            ></DoughnutGraphWidget> */}
          </div>
          <Table1
            data={dashboardData?.widgets[0]}
            today={true}
            bgcolor="white"
          ></Table1>
        </div>
        <Table1
          data={dashboardData?.widgets[0]}
          today={true}
          bgcolor="#5E5ADB"
        ></Table1>

        <Table1
          data={dashboardData?.widgets[0]}
          today={true}
          bgcolor="#282828"
        ></Table1>

        <Summary
          data={dashboardData?.widgets[1]}
          bgcolor={"white"}
          txtcolor="rgba(0,0,0,0.8)"
        ></Summary>

        {/* <GoogleLineChart></GoogleLineChart> */}
      </div>
    </div>
  );
};

export default Dashboard;

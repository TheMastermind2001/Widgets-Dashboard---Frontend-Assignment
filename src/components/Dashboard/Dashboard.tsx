import React, { useEffect, useState } from "react";
import "../../css/Dashboard/Dashboard.css";
import Table1 from "./Widgets/Table1";
import { DashboardData } from "../../types";
import { ChartData } from "../../types";
import Summary from "./Widgets/Summary";
import LineGraphWidget from "./Widgets/LineGraphWidget";
import DoughnutGraphWidget from "./Widgets/DoughnutGraphWidget";
import BarGraphWidget from "./Widgets/BarGraphWidget";
import { useDispatch, useSelector } from "react-redux";
import Table2 from "./Widgets/Table2";
import CombinedWidget from "./Widgets/CombinedWidget";
import { setFinal } from "../../features/finaloptions/finaloptionsSlice";

const renderComponent = (
  bgcolor: string,
  data: DashboardData,
  finaloption: any
) => {
  switch (finaloption) {
    case "Data":
      return <Table1 data={data?.widgets[0]} today={false} bgcolor={bgcolor} />;
    case "Summary":
      return (
        <Summary
          data={data?.widgets[1]}
          bgcolor={bgcolor}
          txtcolor="rgba(0,0,0,0.8)"
        />
      );
    case "Graph Bar":
      return (
        <BarGraphWidget
          data={data?.widgets[8]}
          bgcolor={bgcolor}
          height={"190px"}
          width={"190px"}
          limit={40}
        />
      );
    case "Graph Doughnut":
      return (
        <DoughnutGraphWidget
          data={data?.widgets[6]}
          bgcolor={bgcolor}
        ></DoughnutGraphWidget>
      );
    case "Graph Line":
      return (
        <LineGraphWidget
          chartData={data?.widgets[2] as ChartData}
          xLabelPresent={false}
          bgcolor={bgcolor}
          height={"190px"}
          width={"190px"}
        ></LineGraphWidget>
      );
    // Add more cases for other options if needed
    default:
      return null; // Render nothing for unknown options
  }
};

const Dashboard: React.FC = () => {
  const [arr, setArr] = useState<any>([]);
  const dispatch = useDispatch();
  let data = useSelector((state: any) => state.setData.dashboardData);
  const finaloption = useSelector((state: any) => state.setFinal.finaloption);
  console.log(finaloption);
  const finalbgcolor = useSelector(
    (state: any) => state.setBackground.background
  );
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  useEffect(() => {
    const storedWidgets = localStorage.getItem("dashboardDataDefault");
    if (storedWidgets) {
      const parsedData: DashboardData = JSON.parse(storedWidgets);
      console.log(parsedData);
      setDashboardData(parsedData);
      console.log(data);
      if (
        finaloption &&
        finalbgcolor &&
        renderComponent(finalbgcolor, parsedData, finaloption)
      ) {
        setArr([
          ...arr,
          renderComponent(finalbgcolor, parsedData, finaloption),
        ]);
        dispatch(setFinal(""));
      }
    }
  }, [finaloption]);

  useEffect(() => {
    const storedWidgets = localStorage.getItem("dashboardDataDefault");
    if (storedWidgets) {
      const parsedData: DashboardData = JSON.parse(storedWidgets);
      setDashboardData(parsedData);
    }
  }, [data, dispatch]);

  return (
    <div className="Dashboard">
      <div className="Dashboard-Elements">
        <div className="Dashboard-Item-1">
          <Table1
            data={dashboardData?.widgets[0]}
            today={false}
            bgcolor="white"
          ></Table1>
        </div>
        <div className="Dashboard-Item-2">
          <Table1
            data={dashboardData?.widgets[0]}
            today={true}
            bgcolor="#5E5ADB"
          ></Table1>
        </div>
        <div className="Dashboard-Item-3">
          <CombinedWidget dashboardData={dashboardData}></CombinedWidget>
        </div>
        <div className="Dashboard-Item-4">
          <Table2
            data={dashboardData?.widgets[9]}
            today={false}
            bgcolor="#282828"
          ></Table2>
        </div>
        <div className="Dashboard-Item-5">
          <Summary
            data={dashboardData?.widgets[1]}
            bgcolor={"white"}
            txtcolor="rgba(0,0,0,0.8)"
          ></Summary>
        </div>
        <div className="Dashboard-Item-6">
          <LineGraphWidget
            chartData={dashboardData?.widgets[3] as ChartData}
            xLabelPresent={true}
            bgcolor={"#282828"}
            height={"623px"}
            width={"190px"}
          ></LineGraphWidget>
        </div>
        <div className="Dashboard-Item-7">
          <DoughnutGraphWidget
            data={dashboardData?.widgets[6]}
            bgcolor="white"
          ></DoughnutGraphWidget>
        </div>
        <div className="Dashboard-Item-8">
          <BarGraphWidget
            data={dashboardData?.widgets[7]}
            bgcolor={"white"}
            height={"405px"}
            width={"190px"}
            limit={45}
          ></BarGraphWidget>
        </div>
        <div className="Dashboard-Item-9">
          <Table1
            data={dashboardData?.widgets[0]}
            today={true}
            bgcolor="#282828"
          ></Table1>
        </div>
        <div className="Dashboard-Item-10">
          <Table1
            data={dashboardData?.widgets[0]}
            today={true}
            bgcolor="#5E5ADB"
          ></Table1>
        </div>
        <div className="Dashboard-Item-11">
          {" "}
          <LineGraphWidget
            chartData={dashboardData?.widgets[2] as ChartData}
            xLabelPresent={true}
            bgcolor={"white"}
            height={"415px"}
            width={"190px"}
          ></LineGraphWidget>
        </div>
        <div className="Dashboard-Item-12">
          {" "}
          <Table1
            data={dashboardData?.widgets[0]}
            today={true}
            bgcolor="#282828"
          ></Table1>
        </div>
        <div className="Dashboard-Item-13">
          <LineGraphWidget
            chartData={dashboardData?.widgets[2] as ChartData}
            xLabelPresent={false}
            bgcolor={"white"}
            height={"190px"}
            width={"190px"}
          ></LineGraphWidget>
        </div>
        {arr.map((item: any) => {
          return item;
        })}
      </div>
    </div>
  );
};

export default Dashboard;

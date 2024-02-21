import React, { useEffect, useState } from "react";
import "../../css/Dashboard/Dashboard.css";
import Table1 from "./Widgets/Table1";
import { DashboardData } from "../../types";
import Summary from "./Widgets/Summary";

const Dashboard: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );
  useEffect(() => {
    const storedWidgets = localStorage.getItem("dashboardDataDefault");
    if (storedWidgets) {
      // Ensure you parse the stored string into JSON
      const parsedData: DashboardData = JSON.parse(storedWidgets);
      console.log(parsedData);
      setDashboardData(parsedData);
    }
  }, []);

  return (
    <div className="Dashboard">
      <div className="Dashboard-Elements">
        <Table1
          data={dashboardData?.widgets[0]}
          today={true}
          bgcolor="white"
        ></Table1>

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
      </div>
    </div>
  );
};

export default Dashboard;

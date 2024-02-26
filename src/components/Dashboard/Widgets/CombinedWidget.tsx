import React from "react";
import BarGraphWidget from "./BarGraphWidget";
import Table1 from "./Table1";
import Summary from "./Summary";
import { useSelector } from "react-redux";
import dashboardDataDefault from "../../../data/dashboardDataDefault";
import "../../../css/Dashboard/Widgets/CombinedWidget.css";
import { DashboardData } from "../../../types";
type Props = {
  dashboardData: DashboardData | null;
};

export default function CombinedWidget({ dashboardData }: Props) {
  return (
    <div className="Combined-Widget">
      <BarGraphWidget
        data={dashboardData?.widgets[8]}
        bgcolor={"#282828"}
        height={"190px"}
        width={"204px"}
        limit={40}
        noradius={true}
      ></BarGraphWidget>
      <Table1
        data={dashboardData?.widgets[0]}
        today={false}
        bgcolor="white"
        noradius={true}
      ></Table1>
      <Summary
        data={dashboardData?.widgets[1]}
        bgcolor={"white"}
        txtcolor="rgba(0,0,0,0.8)"
        noradius={true}
      ></Summary>
    </div>
  );
}

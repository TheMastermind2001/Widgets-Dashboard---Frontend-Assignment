import React, { useState } from "react";
import "../../../css/Add-Widget/SubComponents/MainAreaLeft.css";
import { useDispatch, useSelector } from "react-redux";
import Table1 from "../../Dashboard/Widgets/Table1";
import Summary from "../../Dashboard/Widgets/Summary";
import BarGraphWidget from "../../Dashboard/Widgets/BarGraphWidget";
import DoughnutGraphWidget from "../../Dashboard/Widgets/DoughnutGraphWidget";
import LineGraphWidget from "../../Dashboard/Widgets/LineGraphWidget";
import { ChartData } from "../../../types";
import image1 from "../../../images/Circle-color-1.png";
import image2 from "../../../images/Circle-color-2.png";
import image3 from "../../../images/Circle-color-3.png";
import imageselected from "../../../images/Circle-selected.png";
import { setBackground } from "../../../features/background/backgroundSlice";
type Props = {};

export default function MainAreaLeft({}: Props) {
  const option1 = useSelector((state: any) => state.click.option);
  const data = useSelector((state: any) => state.setData.dashboardData);
  const bgcolor = useSelector((state: any) => state.setBackground.background);
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState<number>(2);
  const renderComponent = () => {
    if (data == null || bgcolor == null || option1 == null) {
      console.log(data, bgcolor, option1);
      return null;
    }
    console.log("Here is the data ", data);
    switch (option1) {
      case "Data":
        return (
          <Table1 data={data?.widgets[0]} today={false} bgcolor={bgcolor} />
        );
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
      default:
        return null;
    }
  };
  return (
    <div className="Add-Widget-Main-Area-Left">
      <div className="Add-Widget-Main-Area-Left-Grid">
        <div className="item item1"></div>
        <div className="item item2"></div>
        <div className="item item3"></div>
        <div className="item item4">{renderComponent()}</div>
        <div className="item item5"></div>
        <div className="item item6"></div>
      </div>
      <div className="Add-Widget-Main-Area-Left-Color-Selectors">
        <div
          className={
            (selectedColor == 1
              ? "Add-Widget-Main-Area-Left-Color-Selected "
              : "") +
            "Add-Widget-Main-Area-Left-Color-Selector-1 Add-Widget-Main-Area-Left-Color-Selector "
          }
        >
          <img
            onClick={() => {
              dispatch(setBackground("#282828"));
              setSelectedColor(1);
            }}
            src={image1}
            alt=""
          />
        </div>
        <div
          className={
            (selectedColor == 2
              ? "Add-Widget-Main-Area-Left-Color-Selected "
              : "") +
            "Add-Widget-Main-Area-Left-Color-Selector-2 Add-Widget-Main-Area-Left-Color-Selector "
          }
        >
          <img
            onClick={() => {
              dispatch(setBackground("white"));
              setSelectedColor(2);
            }}
            src={image2}
            alt=""
          />
        </div>
        <div
          className={
            (selectedColor == 3
              ? "Add-Widget-Main-Area-Left-Color-Selected "
              : "") +
            "Add-Widget-Main-Area-Left-Color-Selector-3 Add-Widget-Main-Area-Left-Color-Selector "
          }
        >
          <img
            onClick={() => {
              dispatch(setBackground("#5E5ADB"));
              setSelectedColor(3);
            }}
            src={image3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

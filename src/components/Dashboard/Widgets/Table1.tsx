import React, { useEffect } from "react";
import "../../../css/Dashboard/Widgets/Table1.css";
import { Widget } from "../../../types";
import { Table1Props } from "../../../types";
import Days from "../SubComponents/Days";

const Table1: React.FC<Table1Props> = ({ data, today, bgcolor }) => {
  useEffect(() => {
    console.log(data, today);
  }, []);

  const style = {
    backgroundColor: bgcolor, // This applies the bgcolor prop as the background color
  };

  return (
    <div className="Table1" style={style}>
      {/* <h1>{data?.id}</h1> */}
      <Days color={bgcolor === "white" ? "#5E5ADB" : "white"}></Days>
    </div>
  );
};

export default Table1;

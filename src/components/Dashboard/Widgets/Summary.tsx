import React, { useEffect, useState } from "react";
import "../../../css/Dashboard/Widgets/Summary.css";
import Days from "../SubComponents/Days";
import { Widget } from "../../../types";
import { convertTo12Hour } from "../../../utils/timeUtils";
type Props = {
  data?: Widget;
  bgcolor?: string;
  txtcolor?: string;
  noradius?: boolean;
};

export default function Summary({ data, bgcolor, txtcolor, noradius }: Props) {
  const [array, setArray] = useState<{ time: string; opened: number }[]>([]);
  let arr: {
    time: string;
    opened: number;
  }[] = [];
  useEffect(() => {
    if (!data) return;
    arr = data?.data.openRates;
    arr.sort((a, b) => b.opened - a.opened);
    console.log("Hi", arr);
    setArray(arr);
  }, [data, arr]);
  return (
    <div
      className="Summary"
      style={{
        borderTopLeftRadius: noradius ? "0px" : "15px",
        borderBottomLeftRadius: noradius ? "0px" : "15px",
        width: noradius ? "436px" : "",
        backgroundColor: bgcolor,
      }}
    >
      <Days color={bgcolor || "white"}></Days>
      <div className="Summary-Contents">
        <h1 style={{ color: txtcolor }}>
          Based on the provided data, the most effective hour of the day to send
          an email across all stores for all time, with the highest engagement
          after opening, is at {array[0]?.time}(
          {convertTo12Hour(array[0]?.time)}), with a total of {array[0]?.opened}{" "}
          emails opened. The next best hours are {array[1]?.time}(
          {convertTo12Hour(array[2]?.time)})and {array[0]?.time}(
          {convertTo12Hour(array[1]?.time)}) with {array[1]?.opened} and{" "}
          {array[2]?.opened} emails opened respectively. There is a noticeable
          drop in
        </h1>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "../../../css/Dashboard/Widgets/Table2.css";
import { Widget } from "../../../types";
import { Table1Props } from "../../../types";
import Days from "../SubComponents/Days";
import { toCamelCase } from "../../../utils/stringUtils";

const Table2: React.FC<Table1Props> = ({ data, today, bgcolor }) => {
  const handleString = (key: string) => {
    let str = toCamelCase(key.substring(0, 30) + (key.length > 30 ? ".." : ""));
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= "0" && str[i] <= "9") {
        str = str.substring(0, i);
      }
    }
    return str;
  };
  const HeadColorLeftCell: any = {
    white: "#5E5ADB",
    "#5E5ADB": "#F1F1F2",
    "#282828": "#F1F1F2",
  };
  const HeadColor: any = {
    white: "#ABA8FF",
    "#5E5ADB": "rgba(241,241,242,0.6)",
    "#282828": "rgba(241,241,242,0.6)",
  };
  const TextColor: any = {
    white: "rgba(71,71,71,0.65)",
    "#5E5ADB": "rgba(255,255,255,0.65)",
    "#282828": "rgba(255,255,255,0.65)",
  };
  const TotalColor: any = {
    white: "rgba(57,57,57,0.9)",
    "#5E5ADB": "rgba(244,244,244,0.9)",
    "#282828": "rgba(244,244,244,0.9",
  };
  const [products, setProduts] = useState<string[]>([]);
  const [percentages, setPercentages] = useState<string[][]>([]);
  const [totals, setTotals] = useState<string[]>([]);
  useEffect(() => {
    console.log(data, today);
    if (!data) return;
    // let arr: string[] = [];
    let crr: string[][] = new Array(2).fill(null).map(() => []);
    data?.data.scores.map((score: any, index: number) => {
      const arr: string[] = [];
      const brr: string[] = [];
      Object?.keys(score).forEach((key) => {
        if (key != "period") {
          arr.push(handleString(key));
          brr.push(score[key]);
          setProduts(arr);
        }
      });
      console.log(index);
      crr[index] = brr;
    });
    setPercentages(crr);
    const drr: string[] = [];
    Object.entries(data?.data.total).map((items: any, index: number) => {
      drr.push(items[1]);
    });
    setTotals(drr);
  }, [data]);

  const style = {
    backgroundColor: bgcolor, // This applies the bgcolor prop as the background color
  };

  return (
    <div className="Table2" style={style}>
      <Days color={bgcolor || "white"}></Days>

      <div className="Table2-Contents">
        <div className="Table2-Row Table2-Header">
          <div className="Table2-Cell">
            <h1
              style={{ color: HeadColorLeftCell[bgcolor || "white"] }}
              className="Table2-Header-Cell-1"
            >
              PRODUCT
            </h1>
          </div>
          {data?.data.scores.map((item: any) => {
            return (
              <div className="Table2-Cell">
                <h1
                  style={{
                    color: HeadColor[bgcolor || "white"],
                    textAlign: "center",
                  }}
                >
                  {item.period}
                </h1>
              </div>
            );
          })}
        </div>

        {products.map((product: any, index: number) => {
          return (
            <div className="Table2-Row">
              <div className="Table2-Cell">
                <h1 style={{ color: TextColor[bgcolor || "white"] }}>
                  {product}
                </h1>
              </div>
              <div className="Table2-Cell">
                <h1
                  style={{
                    color: TextColor[bgcolor || "white"],
                    textAlign: "center",
                  }}
                >
                  {percentages[0][index]}
                </h1>
              </div>
              <div className="Table2-Cell">
                <h1
                  style={{
                    color: TextColor[bgcolor || "white"],
                    textAlign: "center",
                  }}
                >
                  {percentages[1][index]}
                </h1>
              </div>
              <div className="Table2-Cell">
                <h1
                  style={{
                    color: TextColor[bgcolor || "white"],
                    textAlign: "center",
                  }}
                >
                  {percentages[2][index]}
                </h1>
              </div>
              <div className="Table2-Cell">
                <h1
                  style={{
                    color: TextColor[bgcolor || "white"],
                    textAlign: "center",
                  }}
                >
                  {percentages[3][index]}
                </h1>
              </div>
              <div className="Table2-Cell">
                <h1
                  style={{
                    color: TextColor[bgcolor || "white"],
                    textAlign: "center",
                  }}
                >
                  {percentages[4][index]}
                </h1>
              </div>
            </div>
          );
        })}

        <div className="Table2-Row Table2-Footer">
          <div className="Table2-Cell Table2-Footer-Cell">
            <h1
              style={{ color: TotalColor[bgcolor || "white"] }}
              className="Table2-Footer-Cell-1"
            >
              Total
            </h1>
          </div>
          {totals.map((item: any, index: any) => {
            if (index >= 5) return;
            return (
              <div className="Table2-Cell Table2-Footer-Cell">
                <h1
                  style={{
                    color: TotalColor[bgcolor || "white"],
                    textAlign: "center",
                  }}
                >
                  {item}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Table2;

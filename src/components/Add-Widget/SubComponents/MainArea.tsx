import React, { useEffect, useState } from "react";
import "../../../css/Add-Widget/SubComponents/MainArea.css";
import MainAreaLeft from "./MainAreaLeft";
import ComponentsArea from "./ComponentsArea";
import SaveArea from "./SaveArea";
import { useSelector } from "react-redux";
import { optionsToComponentMap } from "../../../data/optionToComponentMap";
type Props = {};

export default function MainArea({}: Props) {
  const [option, setOption] = useState<string>("");
  const option1 = useSelector((state: any) => state.click.option);
  useEffect(() => {
    console.log(option1);
  }, [option1]);
  return (
    <div className="Add-Widget-Main-Area">
      <MainAreaLeft></MainAreaLeft>
      <div className="Components-Area-And-Save">
        <ComponentsArea setOption={setOption}></ComponentsArea>
        <SaveArea></SaveArea>
      </div>
    </div>
  );
}

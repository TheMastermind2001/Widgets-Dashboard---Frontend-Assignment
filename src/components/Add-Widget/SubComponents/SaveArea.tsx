import React from "react";
import image1 from "../../../images/Save-Area-Icon-1.png";
import "../../../css/Add-Widget/SubComponents/SaveArea.css";
import { useDispatch, useSelector } from "react-redux";
import { setFinal } from "../../../features/finaloptions/finaloptionsSlice";
import { click } from "../../../features/options/optionsSlice";
type Props = {};

export default function SaveArea({}: Props) {
  const dispatch = useDispatch();
  const option = useSelector((state: any) => state.click.option);
  return (
    <div className="Add-Widget-Save-Area">
      <img src={image1}></img>
      <button
        onClick={() => {
          dispatch(click(""));
        }}
        className="Add-Widget-Save-Area-Cancel"
      >
        Cancel
      </button>
      <button
        onClick={() => {
          console.log(option);
          dispatch(setFinal(option));
        }}
        className="Add-Widget-Save-Area-Save"
      >
        Save
      </button>
    </div>
  );
}

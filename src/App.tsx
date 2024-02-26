import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import SideNavBar from "./components/Side-Navigation-Bar/SideNavBar";
import TopNavBar from "./components/Top-Navigation-Bar/TopNavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import AddWidgetScreen from "./components/Add-Widget/AddWidgetScreen";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./features/data/dataSlice";
import { DashboardData } from "./types";

function App() {
  // const data = useSelector((state: any) => state.click.setData?.dashboardData);
  const dispatch = useDispatch();
  // let data = useSelector((state: any) => state.setData.dashboardData);
  // const [dashboardData, setDashboardData] = useState<DashboardData | null>(
  // null
  // );
  useEffect(() => {
    const storedWidgets = localStorage.getItem("dashboardDataDefault");
    // console.log(storedWidgets);
    if (storedWidgets) {
      // Ensure you parse the stored string into JSON
      const parsedData: DashboardData = JSON.parse(storedWidgets);
      console.log(parsedData);
      // setDashboardData(parsedData);
      dispatch(setData(parsedData));
      // console.log(data);
    }
  }, [dispatch]);
  // useEffect(() => {
  // console.log(data);
  // }, [data]);
  return (
    <div className="App">
      <SideNavBar></SideNavBar>
      <TopNavBar></TopNavBar>
      <Dashboard></Dashboard>
      <AddWidgetScreen></AddWidgetScreen>
    </div>
  );
}

export default App;

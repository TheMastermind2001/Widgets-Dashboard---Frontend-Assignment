import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import SideNavBar from "./components/Side-Navigation-Bar/SideNavBar";
import TopNavBar from "./components/Top-Navigation-Bar/TopNavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import AddWidgetScreen from "./components/Add-Widget/AddWidgetScreen";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./features/data/dataSlice";
import {
  BrowserRouter as Router,
  RouterProvider,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { DashboardData } from "./types";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedWidgets = localStorage.getItem("dashboardDataDefault");
    if (storedWidgets) {
      const parsedData: DashboardData = JSON.parse(storedWidgets);
      console.log(parsedData);
      dispatch(setData(parsedData));
    }
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <SideNavBar />
                <TopNavBar />
                <Dashboard />
              </div>
            }
          />
          <Route
            path="/Add-Widgets"
            element={
              <div>
                <SideNavBar />
                <TopNavBar />
                <Dashboard />
                <div className="To-Be-Faded">
                  <AddWidgetScreen></AddWidgetScreen>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

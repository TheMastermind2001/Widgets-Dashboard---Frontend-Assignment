import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import dashboardDataDefault from "./data/dashboardDataDefault";
import { Provider } from "react-redux";
import { store } from "./app/store";

// Check if widgets data is not already set in local storage
if (!localStorage.getItem("dashboardDataDefault")) {
  localStorage.setItem(
    "dashboardDataDefault",
    JSON.stringify(dashboardDataDefault)
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

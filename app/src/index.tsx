import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ActiveContextProvider } from "./context/ActiveContext";

ReactDOM.render(
  <React.StrictMode>
    <ActiveContextProvider>
      <App />
    </ActiveContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import AppsModule from "./components/AppsModule";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppsModule />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import useAppsModule from "../hooks/useAppsModule";
import "../assets/AppsModule.scss";
import { AppsProvider } from "../context/AppsContext";
import AppsTabs from "./exclusive/AppsTabs";
import AppsAccordions from "./exclusive/AppsAccordions";

const AppsModule = () => {
  const [state] = useAppsModule();

  if (state.apps.length === 0) {
    return (
      <p className="output-msg">
        {state.error ? "Failed to load data" : "Loading..."}
      </p>
    );
  }

  return (
    <AppsProvider>
      <div className="container">
        <AppsTabs />
        <AppsAccordions />
      </div>
    </AppsProvider>
  );
};

export default AppsModule;

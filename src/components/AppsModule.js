import React from "react";
import Accordion from "./Accordion";
import useAppsModule from "../hooks/useAppsModule";
import "../assets/AppsModule.scss";
import { AppsProvider } from "../context/AppsContext";
import AppsTabs from "./exclusive/AppsTabs";

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
        <div className="accordions">
          {state.filteredApps.map((app) => (
            <Accordion items={app.items} title={app.title} key={app.key} />
          ))}
        </div>
      </div>
    </AppsProvider>
  );
};

export default AppsModule;

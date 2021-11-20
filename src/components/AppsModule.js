import React from "react";
import Tabs from "./Tabs";
import Accordion from "./Accordion";
import useAppsModule from "../hooks/useAppsModule";
import "../assets/AppsModule.scss";

const AppsModule = () => {
  const [state, filterAppData] = useAppsModule();

  if (state.apps.length === 0) {
    return (
      <p className="output-msg">
        {state.error ? "Failed to load data" : "Loading..."}
      </p>
    );
  }

  return (
    <div className="container">
      <Tabs
        tabsData={state.tabsData}
        selectedTab={state.selectedTab}
        selectedTabHandler={(selectedTab) => filterAppData(selectedTab)}
        key={"Tabs module"}
      />
      <div className="accordions">
        {state.filteredApps.map((app) => (
          <Accordion items={app.items} title={app.title} key={app.key} />
        ))}
      </div>
    </div>
  );
};

export default AppsModule;

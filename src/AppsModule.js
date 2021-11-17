import React from "react";
import "./assets/App.scss";
import Tabs from "./components/Tabs";
import Accordion from "./components/Accordion";
import useAppsModule from "./hooks/useAppsModule";

const AppsModule = () => {
  const [state, filterAppData] = useAppsModule();

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

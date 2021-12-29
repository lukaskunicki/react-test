import React from "react";
import GenericTabs from "../generic/GenericTabs";
import { useAppsContext } from "../../context/AppsContext";

const AppsTabs = () => {
  const [state, filterAppData] = useAppsContext();

  return (
    <GenericTabs
      selectedTab={state.selectedTab}
      tabsData={state.tabsData}
      selectedTabHandler={filterAppData}
    />
  );
};

export default AppsTabs;

import React, { useEffect, useReducer, useCallback } from "react";
import dataset from "./dataset";
import "./assets/App.scss";
import Tabs from "./components/Tabs";
import Accordion from "./components/Accordion";
import appReducer from "./reducers/appReducer";
import arrayDivider from "./helpers/arrayDivider";
import versionChecker from "./helpers/versionChecker";

const initialState = {
  selectedTab: 0,
  tabsData: [],
  apps: [],
  filteredApps: [],
};
const DIVIDER_VERSION = "1.0.0";

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const initializeAppData = useCallback(async () => {
    // We shouldn't rely on useCallback only,
    // so let's make sure the fech won't be executed without a need
    if (state.apps.length) return;

    const appsData = await fetchDataSet();
    const uniqueTabs = [
      ...new Set(appsData.map((item) => item.type).filter((item) => item)),
    ];
    const [matureApps, betaApps] = arrayDivider(appsData, (e) =>
      versionChecker(e.version, DIVIDER_VERSION)
    );
    dispatch({
      type: "INITIALIZE_APPS",
      payload: { tabsData: uniqueTabs, beta: betaApps, mature: matureApps },
    });
  }, [state.apps]);

  const handleAppsFiltering = (selectedTab) => {
    const newApps = [...state.apps];

    const filterResults = newApps.map((app) =>
      app.items.filter((item) => item.type === selectedTab)
    );

    dispatch({
      type: "FILTER_APPS",
      payload: {
        selectedTab: selectedTab,
        mature: filterResults[0] || [],
        beta: filterResults[1] || [],
      },
    });
  };

  const fetchDataSet = async () => {
    // We would normally fetch an API with async call and handle possible errors
    return dataset;
  };

  useEffect(() => {
    initializeAppData();
  }, [initializeAppData]);

  return (
    <div className="container">
      <Tabs
        tabsData={state.tabsData}
        selectedTab={state.selectedTab}
        selectedTabHandler={(selectedTab) => handleAppsFiltering(selectedTab)}
      />
      <div className="accordions">
        {state.filteredApps.map((app) => (
          <Accordion items={app.items} title={app.title} key={app.key} />
        ))}
      </div>
    </div>
  );
};

export default App;

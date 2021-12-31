import React, { useContext } from "react";
import useAppsModule from "../hooks/useAppsModule";

const initialState = {
  selectedTab: 0,
  tabsData: [],
  apps: [],
  filteredApps: [],
  error: null,
};

const AppsContext = React.createContext(initialState);

const AppsProvider = (props) => {
  const [state, filterAppData] = useAppsModule();
  const contextValue = [state, filterAppData];
  return (
    <AppsContext.Provider value={contextValue} {...props}>
      {state.apps.length === 0 ? (
        <p className="output-msg">
          {state.error ? "Failed to load data" : "Loading..."}
        </p>
      ) : (
        props.children
      )}
    </AppsContext.Provider>
  );
};

const useAppsContext = () => {
  const context = useContext(AppsContext);
  if (context === undefined) {
    throw new Error("AppsContext needs to be used within the Apps context");
  }
  return context;
};

export { AppsProvider, useAppsContext };

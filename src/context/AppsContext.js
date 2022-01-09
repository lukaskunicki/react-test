import React, { createContext } from "react";
import useAppsModule from "../hooks/useAppsModule";
import useAppsContext from "../hooks/useAppsContext";

const AppsContext = createContext();

const AppsProvider = (props) => {
  const [state, filterAppData] = useAppsModule();
  const contextValue = [state, filterAppData];
  return (
    <AppsContext.Provider value={contextValue} {...props}>
      {state.apps.length === 0 ? (
        <p className="output-msg">
          {state.error
            ? "Sorry, There are no apps available currently"
            : "Loading..."}
        </p>
      ) : (
        props.children
      )}
    </AppsContext.Provider>
  );
};

export { AppsContext, AppsProvider, useAppsContext };

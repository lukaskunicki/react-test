import { useEffect, useReducer, useCallback } from "react";
import dataset from "../dataset";
import appsModuleReducer from "../reducers/appsModuleReducer";
import arrayDivider from "../helpers/arrayDivider";
import versionChecker from "../helpers/versionChecker";
import appsFilteringHelper from "../helpers/appsFilteringHelper";

const initialState = {
  selectedTab: 0,
  tabsData: [],
  apps: [],
  filteredApps: [],
  error: null,
};
const DIVIDER_VERSION = "1.0.0";

const useAppsModule = () => {
  const [state, dispatch] = useReducer(appsModuleReducer, initialState);

  const initializeAppData = useCallback(async () => {
    // We shouldn't rely on useCallback only,
    // so let's make sure the fetch won't be executed without a need
    if (state.apps.length) return;
    const appsData = await fetchDataSet();
    if (!appsData) return dispatch({ type: "SET_ERROR", payload: true });
    const uniqueTabs = [
      ...new Set(appsData.map((item) => item.type).filter((item) => item)),
    ];
    const [matureApps, betaApps] = arrayDivider(
      appsData.filter((app) => app.version),
      (e) => {
        return versionChecker(e.version, DIVIDER_VERSION);
      }
    );

    // Handle initial filtering
    const filteredApps = [matureApps, betaApps].map((type) =>
      type.filter((item) => item.type === uniqueTabs[0])
    );

    dispatch({
      type: "INITIALIZE_APPS",
      payload: {
        tabsData: uniqueTabs,
        beta: betaApps,
        mature: matureApps,
        filteredApps: filteredApps,
      },
    });
  }, [state.apps]);

  const filterAppData = (selectedTab) => {
    const newApps = appsFilteringHelper(state.apps, selectedTab);
    dispatch({
      type: "FILTER_APPS",
      payload: {
        ...newApps,
      },
    });
  };

  const fetchDataSet = async () => {
    // We would normally fetch an API with async call and handle possible errors
    try {
      const res = await dataset;
      return res;
    } catch (e) {
      console.log("Error fetching the data", e);
      return false;
    }
  };

  useEffect(() => {
    initializeAppData();
  }, [initializeAppData]);

  return [state, filterAppData];
};

export default useAppsModule;

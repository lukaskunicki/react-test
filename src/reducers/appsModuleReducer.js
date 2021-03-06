import { appTitleMapping } from "../config/appDictionary";

const appsModuleReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_APPS":
      return {
        ...state,
        tabsData: action.payload.tabsData,
        selectedTab: action.payload.tabsData[0],
        apps: [
          {
            key: "mature",
            title: appTitleMapping["mature"],
            items: [...action.payload.mature],
          },
          {
            key: "beta",
            title: appTitleMapping["beta"],
            items: [...action.payload.beta],
          },
        ],
        filteredApps: [
          {
            key: "mature",
            title: appTitleMapping["mature"],
            items: [...action.payload.filteredApps[0]],
          },
          {
            key: "beta",
            title: appTitleMapping["beta"],
            items: [...action.payload.filteredApps[1]],
          },
        ],
      };
    case "SET_TABS":
      return { ...state, tabsData: action.payload };
    case "FILTER_APPS":
      return {
        ...state,
        selectedTab: action.payload.selectedTab,
        filteredApps: [
          {
            key: "mature",
            title: appTitleMapping["mature"],
            items: [...action.payload.mature],
          },
          {
            key: "beta",
            title: appTitleMapping["beta"],
            items: [...action.payload.beta],
          },
        ],
      };
    case "SET_SELECTED_TAB":
      return { ...state, selectedTab: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};

export default appsModuleReducer;

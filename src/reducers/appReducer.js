import appTitleMapping from "../config/appTitleMapping";

const appReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_APPS":
      const newAppsData = [
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
      ];
      return {
        ...state,
        tabsData: action.payload.tabsData,
        selectedTab: action.payload.tabsData[0],
        apps: [...newAppsData],
        filteredApps: [...newAppsData],
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
    default:
      return { ...state };
  }
};

export default appReducer;

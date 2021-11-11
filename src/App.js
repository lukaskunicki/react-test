import { useEffect } from "react";
import dataset from "./dataset";
import "./assets/App.scss";
import Tabs from "./components/Tabs";
import Accordion from "./components/Accordion";

const initialState = {
  selectedTab: 0,
  tabsData: [],
  apps: [],
  filteredApps: [],
};

const App = () => {
  // mock the state for now
  const state = initialState;
  useEffect(() => {
    // Run the logic here
  }, []);

  return (
    <div className="container">
      <Tabs
        tabsData={state.tabsData}
        selectedTab={state.selectedTab}
        selectedTabHandler={(selectedTab) => console.log(selectedTab)}
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

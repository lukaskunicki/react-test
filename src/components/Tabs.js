import React from "react";

const Tabs = ({ tabsData, selectedTab, selectedTabHandler }) => {
  return (
    <div className="tabs-container">
      {tabsData.map((singleTab) => {
        return (
          <div
            key={singleTab}
            onClick={() => selectedTabHandler(singleTab)}
            tabIndex={0}
            aria-label={`Choose ${singleTab} type`}
          >
            {singleTab}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;

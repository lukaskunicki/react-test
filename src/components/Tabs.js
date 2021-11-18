import React from "react";
import { isActionKey } from "../helpers/keyCodeChecker";
import classNameHelper from "../helpers/classNameHelper";

const Tabs = ({ tabsData, selectedTab, selectedTabHandler }) => {
  const keyPressHandler = (e, singleTab) => {
    if (!isActionKey(e)) return;
    selectedTabHandler(singleTab);
  };

  return (
    <div className="tabs-container">
      {tabsData.map((singleTab) => {
        // We are 100% sure that the key is unique, as
        // the array doesn't contain duplicates
        const tabClasses = classNameHelper("tabs-container__tab", {
          "tabs-container__tab--active": selectedTab === singleTab,
        });
        return (
          <div
            key={singleTab}
            className={tabClasses}
            tabIndex={0}
            aria-label={`Choose ${singleTab} type`}
            onClick={() => selectedTabHandler(singleTab)}
            onKeyDown={(e) => keyPressHandler(e, singleTab)}
          >
            {singleTab}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;

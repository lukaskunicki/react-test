import React from "react";
import classNameHelper from "../helpers/classNameHelper";
import PropTypes from "prop-types";

const Tabs = ({ tabsData, selectedTab, selectedTabHandler }) => {
  return (
    <div className="tabs-container">
      {tabsData.map((singleTab) => {
        // We are 100% sure that the key is unique, as
        // the array doesn't contain duplicates
        const tabClasses = classNameHelper("tabs-container__tab", {
          "tabs-container__tab--active": selectedTab === singleTab,
        });
        return (
          <button
            key={singleTab}
            className={tabClasses}
            tabIndex={0}
            aria-label={`Choose ${singleTab} type`}
            onClick={() => selectedTabHandler(singleTab)}
          >
            {singleTab}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;

Tabs.propTypes = {
  tabsData: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectedTabHandler: PropTypes.func.isRequired,
};

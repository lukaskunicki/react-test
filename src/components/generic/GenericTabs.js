import React from "react";
import classNameHelper from "../../helpers/classNameHelper";
import PropTypes from "prop-types";
import uuid from "react-uuid";

const GenericTabs = ({ tabsData, selectedTab, selectedTabHandler }) => {
  return (
    <div className="tabs-container">
      {tabsData.map((singleTab) => {
        const tabClasses = classNameHelper("tabs-container__tab", {
          "tabs-container__tab--active": selectedTab === singleTab,
        });
        return (
          <button
            key={uuid()}
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

export default React.memo(GenericTabs);

GenericTabs.propTypes = {
  tabsData: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectedTabHandler: PropTypes.func.isRequired,
};

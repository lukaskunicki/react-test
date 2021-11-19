import React, { useState } from "react";
import Table from "./Table";
import classNameHelper from "../helpers/classNameHelper";
import { columnsPaths, tableHeaders } from "../config/appDictionary";

const Accordion = ({ items, title }) => {
  const [expanded, setExpanded] = useState(false);
  const titleClasses = classNameHelper("accordions__item__title", {
    "accordions__item__title--expanded": expanded,
    "accordions__item__title--collapsed": !expanded,
  });
  const accordionClasses = classNameHelper("accordions__item__content", {
    "accordions__item__content--expanded": expanded,
  });

  const expandedHandler = () => {
    if (window.location.hash.length) window.history.pushState(null, null, " ");
    if (expanded) return setExpanded(false);
    setExpanded(true);
  };

  return (
    <div className="accordions__item" aria-expanded={expanded}>
      <button className={titleClasses} onClick={expandedHandler}>
        {title}
      </button>
      <div className={accordionClasses} aria-hidden={!expanded}>
        {expanded ? (
          <Table
            items={items}
            headers={tableHeaders}
            columnPaths={columnsPaths}
            key="Accordion table"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Accordion;

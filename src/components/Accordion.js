import React from "react";
import Table from "./Table";
import { columnsPaths, tableHeaders } from "../config/appDictionary";
import classNameHelper from "../helpers/classNameHelper";
import useExpanded from "../hooks/useExpanded";

const Accordion = ({ items, title }) => {
  const { expanded, expandedHandler } = useExpanded(false);

  const itemClasses = classNameHelper("accordions__item", {
    "accordions__item--expanded": expanded,
    "accordions__item--collapsed": !expanded,
  });

  return (
    <div className={itemClasses} aria-expanded={expanded}>
      <button className="accordions__item__title" onClick={expandedHandler}>
        {title}
      </button>
      <div className="accordions__item__content" aria-hidden={!expanded}>
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

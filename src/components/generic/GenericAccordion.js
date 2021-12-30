import React from "react";
import GenericTable from "./GenericTable";
import { columnsPaths, tableHeaders } from "../../config/appDictionary";
import classNameHelper from "../../helpers/classNameHelper";
import useExpanded from "../../hooks/useExpanded";
import PropTypes from "prop-types";

const GenericAccordion = ({ items, title }) => {
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
          <GenericTable
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

export default React.memo(GenericAccordion);

GenericAccordion.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

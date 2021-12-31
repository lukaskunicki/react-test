import React from "react";
import classNameHelper from "../../helpers/classNameHelper";
import useExpanded from "../../hooks/useExpanded";
import PropTypes from "prop-types";

const GenericAccordion = ({ title, children }) => {
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
        {expanded ? children : null}
      </div>
    </div>
  );
};

export default React.memo(GenericAccordion);

GenericAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

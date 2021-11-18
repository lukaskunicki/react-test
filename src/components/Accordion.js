import React, { useState } from "react";
import Table from "./Table";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";
import classNameHelper from "../helpers/classNameHelper";
import { isToggleKey } from "../helpers/keyCodeChecker";
import { columnsPaths, tableHeaders } from "../config/appDictionary";

const Accordion = ({ items, title }) => {
  const [expanded, setExpanded] = useState(false);
  const accordionClasses = classNameHelper("accordions__item__content", {
    "accordions__item__content--expanded": expanded,
  });

  const expandedHandler = () => {
    if (window.location.hash.length) window.history.pushState(null, null, " ");
    if (expanded) return setExpanded(false);
    setExpanded(true);
  };

  const keyDownHandler = (e) => {
    if (!isToggleKey(e)) return;
    expandedHandler();
  };

  return (
    <div
      className="accordions__item"
      tabIndex={0}
      onKeyDown={keyDownHandler}
      aria-expanded={expanded}
    >
      <div className="accordions__item__title" onClick={expandedHandler}>
        <span className="accordions__item__title__caption">{title}</span>
        <span className="accordions__item__title__icon">
          {expanded ? (
            <MinusIcon key="Minus icon" />
          ) : (
            <PlusIcon key="Plus icon" />
          )}
        </span>
      </div>
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

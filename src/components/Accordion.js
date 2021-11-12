import React, { useState } from "react";
import Table from "./Table";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";
import { isActionKey } from "../helpers/keyCodeChecker";
import classNameHelper from "../helpers/classNameHelper";

const Accordion = ({ items, title }) => {
  const [expanded, setExpanded] = useState(false);
  const [itemsLimit, setItemsLimit] = useState(100);

  if (!items?.length) return null;

  const accordionClasses = classNameHelper("accordions__item__content", {
    "accordions__item__content--expanded": expanded,
  });

  const expandedHandler = () => {
    if (window.location.hash.length) window.history.pushState(null, null, " ");
    setExpanded((prevState) => !prevState);
  };

  const keyDownHandler = (e) => {
    if (!isActionKey(e)) return;
    expandedHandler();
  };

  const scrollHandler = (e) => {
    const element = e.target;
    const targetHeight = element.offsetHeight + element.scrollTop + 100;
    if (targetHeight <= element.scrollHeight) return;
    if (itemsLimit < items.length)
      setItemsLimit((prevState) => prevState + 200);
  };

  return (
    <div className="accordions__item" tabIndex={0} onKeyDown={keyDownHandler}>
      <div className="accordions__item__title" onClick={expandedHandler}>
        <span className="accordions__item__title__caption">{title}</span>
        <span className="accordions__item__title__icon">
          {expanded ? <MinusIcon /> : <PlusIcon />}
        </span>
      </div>
      <div className={accordionClasses} onScroll={(e) => scrollHandler(e)}>
        {expanded ? <Table items={items} itemsLimit={itemsLimit} /> : null}
      </div>
    </div>
  );
};

export default Accordion;

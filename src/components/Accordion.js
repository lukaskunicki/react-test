import React, { useState } from "react";
import Table from "./Table";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";

const Accordion = ({ items, title }) => {
  const [expanded, setExpanded] = useState(false);

  if (!items?.length) return null;

  const expandedHandler = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <div className="accordions__item">
      <div className="accordions__item__title" onClick={expandedHandler}>
        <span className="accordions__item__title__caption">{title}</span>
        <span className="accordions__item__title__icon">
          {expanded ? <MinusIcon /> : <PlusIcon />}
        </span>
      </div>
      <div>{expanded ? <Table items={items} /> : null}</div>
    </div>
  );
};

export default Accordion;

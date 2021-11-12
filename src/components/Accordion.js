import React, { useReducer, useEffect, useRef } from "react";
import Table from "./Table";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";
import { isToggleKey } from "../helpers/keyCodeChecker";
import classNameHelper from "../helpers/classNameHelper";
import accordionReducer from "../reducers/accordionReducer";

const initialState = {
  expanded: false,
  itemsLimit: 100,
};

const Accordion = ({ items, title }) => {
  const [state, dispatch] = useReducer(accordionReducer, initialState);
  const accordionContent = useRef(null);
  const accordionClasses = classNameHelper("accordions__item__content", {
    "accordions__item__content--expanded": state.expanded,
  });

  const expandedHandler = () => {
    if (window.location.hash.length) window.history.pushState(null, null, " ");
    if (state.expanded) return dispatch({ type: "COLLAPSE" });
    return dispatch({ type: "EXPAND" });
  };

  const keyDownHandler = (e) => {
    if (!isToggleKey(e)) return;
    expandedHandler();
  };

  const scrollHandler = (e) => {
    const element = e.target;
    const targetHeight = element.offsetHeight + element.scrollTop + 100;
    if (targetHeight <= element.scrollHeight) return;
    if (state.itemsLimit < items.length)
      dispatch({ type: "INCREASE_LIMIT", payload: 200 });
  };

  useEffect(() => {
    accordionContent.current.scrollTop = 0;
    // We need to make sure we start with a default limit on tab change
    dispatch({ type: "RESET_LIMIT" });
  }, [items]);

  return (
    <div
      className="accordions__item"
      tabIndex={0}
      onKeyDown={keyDownHandler}
      aria-expanded={state.expanded}
    >
      <div className="accordions__item__title" onClick={expandedHandler}>
        <span className="accordions__item__title__caption">{title}</span>
        <span className="accordions__item__title__icon">
          {state.expanded ? <MinusIcon /> : <PlusIcon />}
        </span>
      </div>
      <div
        className={accordionClasses}
        onScroll={(e) => scrollHandler(e)}
        ref={accordionContent}
        aria-hidden={!state.expanded}
      >
        {state.expanded ? (
          <Table items={items} itemsLimit={state.itemsLimit} />
        ) : null}
      </div>
    </div>
  );
};

export default Accordion;

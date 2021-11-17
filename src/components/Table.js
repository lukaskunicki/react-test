import React, { useState, useRef, useEffect } from "react";
import { isActionKey } from "../helpers/keyCodeChecker";
import TableRow from "./TableRow";
const tableHeaders = ["Application Name", "Author", "Version"];

const Table = ({ items }) => {
  const [itemsLimit, setItemsLimit] = useState(100);
  const tableContainer = useRef(null);

  const scrollHandler = (e) => {
    const element = e.target;
    const targetHeight = element.offsetHeight + element.scrollTop + 100;
    if (targetHeight <= element.scrollHeight) return;
    if (itemsLimit < items.length)
      setItemsLimit((prevState) => prevState + 200);
  };

  const appClickHandler = (appName) => {
    if (!appName) return;
    window.location.hash = appName;
  };

  const keyDownHandler = (e, appName) => {
    if (!isActionKey(e)) return;
    appClickHandler(appName);
  };

  useEffect(() => {
    tableContainer.current.scrollTop = 0;
    setItemsLimit(100);
  }, [items]);

  return (
    <div
      className="table-container"
      onScroll={(e) => scrollHandler(e)}
      ref={tableContainer}
    >
      <table className="app-table">
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.slice(0, itemsLimit).map((item, k) => {
            const columns = [item.app, item.author?.name, item.version];
            return (
              <TableRow
                clickHandler={appClickHandler}
                keyDownHandler={keyDownHandler}
                handlerParameter={item.app}
                columns={columns}
                key={k}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

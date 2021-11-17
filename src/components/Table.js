import React, { useRef } from "react";
import TableRow from "./TableRow";
import useLoadMoreScroll from "../hooks/useLoadMoreScroll";
import { isActionKey } from "../helpers/keyCodeChecker";
import pathResolver from "../helpers/pathResolver";

const Table = ({ items, headers, columnPaths }) => {
  const tableContainer = useRef(null);
  const scrollData = {
    defaultLimit: 100,
    items: items,
  };
  const { itemsLimit, scrollHandler } = useLoadMoreScroll(
    tableContainer,
    scrollData
  );

  const appClickHandler = (appName) => {
    if (!appName) return;
    window.location.hash = appName;
  };

  const keyDownHandler = (e, appName) => {
    if (!isActionKey(e)) return;
    appClickHandler(appName);
  };

  return (
    <div
      className="table-container"
      onScroll={(e) => scrollHandler(e)}
      ref={tableContainer}
    >
      <table className="app-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.slice(0, itemsLimit).map((item) => {
            const columns = columnPaths.map((path) => pathResolver(item, path));
            return (
              <TableRow
                clickHandler={appClickHandler}
                keyDownHandler={keyDownHandler}
                handlerParameter={item.app}
                columns={columns}
                key={item.id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

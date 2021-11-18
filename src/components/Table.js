import React, { useRef } from "react";
import TableRow from "./TableRow";
import useLoadMoreScroll from "../hooks/useLoadMoreScroll";
import usePrevious from "../hooks/usePrevious";
import pathResolver from "../helpers/pathResolver";
import { isActionKey } from "../helpers/keyCodeChecker";

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
  const prevLimit = usePrevious(itemsLimit);
  // Prevent unnecessary processing of a huge dataset
  const arraySlicer =
    itemsLimit === prevLimit ? scrollData.defaultLimit : itemsLimit;

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
          {items.slice(0, arraySlicer).map((item) => {
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

export default React.memo(Table);

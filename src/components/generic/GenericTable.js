import React, { useRef } from "react";
import TableRow from "./partials/GenericTableRow";
import useLoadMoreScroll from "../../hooks/useLoadMoreScroll";
import pathResolveHelper from "../../helpers/pathResolveHelper";
import { isActionKey } from "../../helpers/keyCodeHelper";
import appPickingHelper from "../../helpers/appPickingHelper";
import PropTypes from "prop-types";

const GenericTable = ({ items, headers, columnPaths }) => {
  const tableContainer = useRef(null);
  const scrollData = {
    defaultLimit: 100,
    items: items,
  };
  const { itemsLimit, scrollHandler } = useLoadMoreScroll(
    tableContainer,
    scrollData
  );

  const keyDownHandler = (e, appName) => {
    if (!isActionKey(e)) return;
    appPickingHelper(appName);
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
            const columns = columnPaths.map((path) =>
              pathResolveHelper(item, path)
            );
            return (
              <TableRow
                clickHandler={appPickingHelper}
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

export default React.memo(GenericTable);

GenericTable.propTypes = {
  items: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  columnPaths: PropTypes.array.isRequired,
};

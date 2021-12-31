import React, { useRef } from "react";
import GenericTableRow from "./partials/GenericTableRow";
import useLoadMoreScroll from "../../hooks/useLoadMoreScroll";
import pathResolveHelper from "../../helpers/pathResolveHelper";
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
              <GenericTableRow
                key={item.id}
                rowKey={item.app}
                columns={columns}
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

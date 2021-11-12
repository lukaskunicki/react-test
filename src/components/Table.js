import React from "react";
const tableHeaders = ["Application Name", "Author", "Version"];

const TableApp = ({ items, itemsLimit }) => {
  // Helper function for embedding the string values safely
  const safeEmbed = (value) => {
    return value || "-";
  };

  const appClickHandler = (appName) => {
    if (!appName) return;
    window.location.hash = appName;
  };

  return (
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
        {items.slice(0, itemsLimit).map((item) => {
          const columns = [item.app, item.author?.name, item.version];
          return (
            <tr
              tabIndex={0}
              key={item.id}
              onClick={() => appClickHandler(item.app)}
            >
              {columns.map((col, index) => (
                <td key={index}>{safeEmbed(col)}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableApp;

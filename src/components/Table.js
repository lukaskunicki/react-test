import React from "react";
import { isActionKey } from "../helpers/keyCodeChecker";

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

  const keyDownHandler = (e, appName) => {
    if (!isActionKey(e)) return;
    appClickHandler(appName);
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
        {items.slice(0, itemsLimit).map((item, k) => {
          const columns = [item.app, item.author?.name, item.version];
          return (
            <tr
              tabIndex={0}
              key={k}
              onClick={() => appClickHandler(item.app)}
              onKeyDown={(e) => keyDownHandler(e, item.app)}
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

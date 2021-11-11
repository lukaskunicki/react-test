import React from "react";
const tableHeaders = ["Application Name", "Author", "Version"];

const TableApp = ({ items }) => {
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
        {items.map((item) => {
          const columns = [item.app, item.author?.name, item.version];
          return (
            <tr key={item.id}>
              {columns.map((col, index) => (
                <td key={index}>{col}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableApp;

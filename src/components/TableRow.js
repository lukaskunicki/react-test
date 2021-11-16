import React from "react";

const TableRow = ({
  clickHandler,
  keyDownHandler,
  handlerParameter,
  columns,
}) => {
  // Helper function for embedding the string values safely
  const safeEmbed = (value) => {
    return value || "-";
  };

  return (
    <tr
      tabIndex={0}
      onClick={() => clickHandler(handlerParameter)}
      onKeyDown={(e) => keyDownHandler(e, handlerParameter)}
    >
      {columns.map((col, index) => (
        <td key={index}>{safeEmbed(col)}</td>
      ))}
    </tr>
  );
};

export default TableRow;

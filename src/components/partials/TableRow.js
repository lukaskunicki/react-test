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
    <tr>
      {columns.map((col, index) => (
        <td
          tabIndex={0}
          key={index}
          onClick={() => clickHandler(handlerParameter)}
          onKeyDown={(e) => keyDownHandler(e, handlerParameter)}
        >
          {safeEmbed(col)}
        </td>
      ))}
    </tr>
  );
};

export default React.memo(TableRow);

import React from "react";
import safeEmbedHelper from "../../helpers/safeEmbedHelper";
import uuid from "react-uuid";

const TableRow = ({
  clickHandler,
  keyDownHandler,
  handlerParameter,
  columns,
}) => {
  return (
    <tr>
      {columns.map((col) => (
        <td
          tabIndex={0}
          key={uuid()}
          onClick={() => clickHandler(handlerParameter)}
          onKeyDown={(e) => keyDownHandler(e, handlerParameter)}
        >
          {safeEmbedHelper(col)}
        </td>
      ))}
    </tr>
  );
};

export default React.memo(TableRow);

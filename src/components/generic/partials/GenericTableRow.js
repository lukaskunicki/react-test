import React from "react";
import safeEmbedHelper from "../../../helpers/safeEmbedHelper";
import uuid from "react-uuid";
import PropTypes from "prop-types";

const GenericTableRow = ({
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

export default React.memo(GenericTableRow);

GenericTableRow.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  keyDownHandler: PropTypes.func.isRequired,
  handlerParameter: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
};

import React from "react";
import safeEmbedHelper from "../../../helpers/safeEmbedHelper";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import { isActionKey } from "../../../helpers/keyCodeHelper";
import appPickingHelper from "../../../helpers/appPickingHelper";

const GenericTableRow = ({ rowKey, columns }) => {
  const keyDownHandler = (e, appName) => {
    if (!isActionKey(e)) return;
    appPickingHelper(appName);
  };

  return (
    <tr>
      {columns.map((col) => (
        <td
          tabIndex={0}
          key={uuid()}
          onClick={() => appPickingHelper(rowKey)}
          onKeyDown={(e) => keyDownHandler(e, rowKey)}
        >
          {safeEmbedHelper(col)}
        </td>
      ))}
    </tr>
  );
};

export default React.memo(GenericTableRow);

GenericTableRow.propTypes = {
  rowKey: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
};

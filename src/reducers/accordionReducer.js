const accordionReducer = (state, action) => {
  switch (action.type) {
    case "EXPAND":
      return {
        ...state,
        expanded: true,
      };
    case "COLLAPSE":
      return { ...state, expanded: false, itemsLimit: 100 };
    case "INCREASE_LIMIT":
      return { ...state, itemsLimit: state.itemsLimit + action.payload };
    case "RESET_LIMIT":
      return { ...state, itemsLimit: 100 };
    default:
      return { ...state };
  }
};

export default accordionReducer;

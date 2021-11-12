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
    default:
      return { ...state };
  }
};

export default accordionReducer;

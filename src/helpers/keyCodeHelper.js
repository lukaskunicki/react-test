const ACTION_KEY_CODES = [13];

const isActionKey = (event) => {
  return ACTION_KEY_CODES.includes(event.keyCode);
};

export { isActionKey };

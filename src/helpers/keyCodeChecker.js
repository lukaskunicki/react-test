const TOGGLE_KEY_CODES = [32];
const ACTION_KEY_CODES = [13];

const isToggleKey = (event) => {
  return TOGGLE_KEY_CODES.includes(event.keyCode);
};

const isActionKey = (event) => {
  return ACTION_KEY_CODES.includes(event.keyCode);
};

export { isToggleKey, isActionKey };

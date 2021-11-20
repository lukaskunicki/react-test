const getFloorValue = (num) => {
  // the ~~ operator may be faster than Math.floor in some browsers
  return ~~num;
};

// In this case we could also parse the app version to integer value,
// however such a solution wouldn't work if the divider version would be 2.0.3 or 4.0.5,
// so this solution is more universal
const versionCheckHelper = (oldVer, defaultVersion) => {
  if (!oldVer) return null;
  // iterate through the version numbers
  const oldParts = oldVer.split(".");
  for (let i = 0; i < defaultVersion.length; i++) {
    return getFloorValue(defaultVersion[i]) <= getFloorValue(oldParts[i]);
  }
  return true;
};

export default versionCheckHelper;

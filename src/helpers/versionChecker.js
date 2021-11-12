const getFloorValue = (num) => {
  // the ~~ operator may be faster than Math.floor in some browsers
  return ~~num;
};

const versionChecker = (oldVer, defaultVersion) => {
  if (!oldVer) return true;
  // iterate through the version numbers
  const oldParts = oldVer.split(".");
  for (let i = 0; i < defaultVersion.length; i++) {
    return getFloorValue(defaultVersion[i]) <= getFloorValue(oldParts[i]);
  }
  return true;
};

export default versionChecker;

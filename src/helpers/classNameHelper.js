// We will use this feature for just a few cases,
// so instead of importing the classnames package, let's create a simple helper
const classNameHelper = (initialClass = "", statements) => {
  let statementOutput = "";
  for (const className in statements) {
    if (!statements[className]) continue;
    statementOutput += " " + className;
  }
  if (statementOutput.trim().length)
    return initialClass + " " + statementOutput.trim();
  return initialClass;
};

export default classNameHelper;

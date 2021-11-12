// We will use this feature for just a few cases,
// so instead of importing the classnames package, let's create a simple helper
const classNameHelper = (initialClass, statements) => {
  let statementOutput = "";
  for (const className in statements) {
    if (!statements[className]) continue;
    statementOutput += " " + className;
  }
  return initialClass + " " + statementOutput.trim();
};

export default classNameHelper;

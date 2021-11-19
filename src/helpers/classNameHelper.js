// We will use this feature for just a few cases,
// so instead of importing the classnames package, let's create a simple helper
const classNameHelper = (initialClass, statements) => {
  let statementOutput = initialClass.trim();
  for (const className in statements) {
    if (!statements[className]) continue;
    statementOutput += " " + className.trim();
  }
  return statementOutput.trim();
};

export default classNameHelper;

const pathResolveHelper = (object, path) =>
  path.split(".").reduce((total, curr) => (total ? total[curr] : null), object);

export default pathResolveHelper;

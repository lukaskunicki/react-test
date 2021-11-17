const pathResolver = (object, path) =>
  path.split(".").reduce((o, p) => (o ? o[p] : null), object);

export default pathResolver;

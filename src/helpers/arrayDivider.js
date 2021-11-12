const arrayDivider = (array, divider) => {
  return array.reduce(
    ([pass, fail], elem) => {
      return divider(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
    },
    [[], []]
  );
};

export default arrayDivider;

import arrayDivider from "./helpers/arrayDivider";
import classNameHelper from "./helpers/classNameHelper";
import pathResolver from "./helpers/pathResolver";
import versionChecker from "./helpers/versionChecker";

// These tests ensure that the helper functions are working properly

test("Classname helper with initial class", () => {
  const _class = classNameHelper("class1 class2 class3");
  expect(_class).toEqual("class1 class2 class3");
});

test("Classname helper with initial class and statements", () => {
  const _class = classNameHelper("class1", {
    class2: true,
    class3: false,
    class4: true,
  });
  expect(_class).toEqual("class1 class2 class4");
});

test("Classname helper with statements only", () => {
  const _class = classNameHelper("", {
    class2: true,
    class3: false,
    class4: true,
  });
  expect(_class).toEqual("class2 class4");
});

test("Version checker", () => {
  const divider = "1.0.0";
  const initialData = [
    "1",
    "1.0.0.3",
    "5.0.1",
    "0.98.2",
    "0.10.10.1",
    "1.0.0.0.0.1",
  ];
  const expected = [true, true, true, false, false, true];
  const helperResult = initialData.map((item) => versionChecker(item, divider));
  expect(helperResult).toEqual(expected);
});

test("Array divider", () => {
  const initialData = [
    { id: 1, type: "mature" },
    { id: 2, type: "beta" },
    { id: 3, type: "beta" },
    { id: 4, type: "beta" },
    { id: 5, type: "mature" },
    { id: 6, type: "mature" },
    { id: 7, type: "beta" },
  ];
  const [beta, mature] = arrayDivider(initialData, (e) => e.type === "beta");

  beta.forEach((i) => expect(i.type).toEqual("beta"));
  mature.forEach((i) => expect(i.type).toEqual("mature"));
});

test("Path resolver", () => {
  const initialData = {
    id: 1,
    name: "John",
    location: {
      city: "London",
      country: "UK",
    },
  };

  const outputData = [1, "John", "London", null];

  const paths = ["id", "name", "location.city", "location.country.code.id"];
  paths.forEach((path, index) =>
    expect(pathResolver(initialData, path)).toEqual(outputData[index])
  );
});

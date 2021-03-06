const { strSorter } = require("./sorter");

describe("string sorter", () => {
  it("given an unsorted string, outputs a sorted string", () => {
    const unsorted = "aljfsafka3jsfadf454asfasflier98734";
    const sorted = "ssssrllkjjiffffffedaaaaaa987544433";
    expect(strSorter(unsorted) === sorted).toBe(true);
  });
  it("ouputs an empty string, given an empty string as input", () => {
    expect(strSorter("") === "").toBe(true);
  });
});

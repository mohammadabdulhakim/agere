const { randArr, capitalize } = require("../index");

describe("Agere", () => {
  test("randArr", () => {
    expect(randArr(["a", "b", "c"])).not.toBe(["a", "b", "c"]);
  });
  test("capitalize", () => {
    expect(capitalize("egypt")).toBe("Egypt");
  });
});

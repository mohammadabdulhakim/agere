const { randArr, capitalize, randColor } = require("../index");

describe("Agere", () => {
  test("randArr", () => {
    expect(randArr(["a", "b", "c"])).not.toBe(["a", "b", "c"]);
  });
  test("capitalize", () => {
    expect(capitalize("egypt")).toBe("Egypt");
  });
  test("randColor", () => {
    expect(randColor()).toContain("#");
  });
  
});

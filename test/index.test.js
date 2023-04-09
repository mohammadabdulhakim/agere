const { randArr, capitalize, randColor, gPass } = require("../index");

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
  test("gPass", () => {
    expect(gPass()).toHaveLength(8);
  });
  
});

const { randArr, capitalize, randColor, gPass, pull, abbText } = require("../index");

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
  test("pull", () => {
    expect(pull([1,2,3,4],2)).toStrictEqual([1,3,4]);
  });
  test("abbText", () => {
    expect(abbText("I love agere.",3)).toBe("I l...");
  });
  
});

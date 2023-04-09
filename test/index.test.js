const { randArr } = require("../index");

describe("Agere", () => {
  test("randArr", () => {
    expect(randArr(["a", "b", "c"])).not.toBe(["a", "b", "c"]);
  });
});

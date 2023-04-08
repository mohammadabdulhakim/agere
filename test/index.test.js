import {randArr} from "./src/index"


describe("Agere",()=>{
  test("randArr",()=>{
    expect(randArr(["a","b","c"])).not.toBe(["a","b","c"])
  })
})
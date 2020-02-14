const { squareDigits } = require("../functions/functions");

describe("squareDigits", () => {
test(`squareDigits(99) should return 8181`, ()=>{
    expect(squareDigits(99)).toBe(8181);
})

test(`squareDigits(0) should return 0`, ()=>{
    expect(squareDigits(0)).toBe(0);
})

test("Object `a` should have the same properties as Object `b`", () => {
    let a = {
        name: "Beth"
    }
    let b = {
        name: "Beth"
    }
    expect(a).toEqual(b);
})
})

//toBeGreaterThan
//toBeGreaterThanOrEqual
//toBeLessThan
//toBeLessThanOrEqual
//.not
//toBeNull
//toBeUndefined
//toBeDefined
//toBeTruthy
//toBeFalsy


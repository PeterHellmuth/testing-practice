import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from ".";

test("Capitalize the first character.", () => {
  expect(capitalize("thisThing")).toBe("ThisThing");
});

test("Reverses a string.", () => {
  expect(reverseString("Wow, crazy!")).toBe("!yzarc ,woW");
});

test("Calculator adds two numbers.", () => {
  expect(calculator.add(3, 7)).toBe(10);
});
test("Calculator subtracts two numbers.", () => {
  expect(calculator.subtract(3, 7)).toBe(-4);
});
test("Calculator divides two numbers.", () => {
  expect(calculator.divide(9, 3)).toBe(3);
  expect(calculator.divide(9, 0)).toBe(null);
});
test("Calculator multiplies two numbers.", () => {
  expect(calculator.multiply(3, 7)).toBe(21);
});

test("Shift x number of characters according to Caesar chipher.", () => {
  expect(caesarCipher("zZ!! defend the east wall of the castle", 1)).toBe(
    "aA!! efgfoe uif fbtu xbmm pg uif dbtumf",
  );
  expect(caesarCipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
});

test("Analyze array and return object with results.", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

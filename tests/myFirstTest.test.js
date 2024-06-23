const { sum } = require("../utils/helper");

// describe("Number Operations", () => {
//   test("1 plus 1 should be equal to 2", () => {
//     let a = 1;
//     let b = 1;
//     expect(a + b).toBe(2);
//   });
//   test("5 plus 6 should not be equal to 10", () => {
//     let a = 5;
//     let b = 6;
//     expect(a + b).not.toBe(11);
//   });
// });

// describe("Testing with strings", () => {
//   test("the letter I should not be in Team", () => {
//     const string = "Team";
//     expect(string).not.toMatch(/a/);
//   });
// });
describe("test the sum function", () => {
  test("sum function should add 2 numbers", () => {
    const a = 2;
    const b = 4;
    expect(sum(a, b)).toBe(6);
  });
});

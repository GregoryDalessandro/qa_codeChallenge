import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];

describe("Calculator", () => {
  // for each math problem in dataset..
  dataset.forEach(mathProblem => {
    // test if expected value is equal to actual value using a switch statement to determine which calculator method to call
    switch(mathProblem.method) {
      case "add":
        it(`can add: ${mathProblem.x} + ${mathProblem.x}`, () => {
          return expect(mathProblem.x + mathProblem.y).toEqual(calculator.add(mathProblem.x, mathProblem.y));
        });
        break;
      case "subtract":
        it(`can subtract: ${mathProblem.x} - ${mathProblem.x}`, () => {
          return expect(mathProblem.x - mathProblem.y).toEqual(calculator.subtract(mathProblem.x, mathProblem.y));
        });
        break;
      case "multiply":
        it(`can multiply: ${mathProblem.x} * ${mathProblem.x}`, () => {
          return expect(mathProblem.x * mathProblem.y).toEqual(calculator.multiply(mathProblem.x, mathProblem.y));
        });
        break;
      case "divide":
        it(`can divide: ${mathProblem.x} / ${mathProblem.x}`, () => {
          return expect(mathProblem.x / mathProblem.y).toEqual(calculator.divide(mathProblem.x, mathProblem.y));
        });
        break;
      default:
        console.log("default");
    }
  });
});

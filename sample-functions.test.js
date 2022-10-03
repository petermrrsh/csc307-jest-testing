const myFunctions = require('./sample-functions.js');

test('Sum() -- simple case', () => {
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(target).toBe(result);
});

test('Sum() -- negative numbers', () => {
  expect(myFunctions.sum(-5, -29)).toBe(-34);
});

test('Div() -- simple case', () => {
  expect(myFunctions.div(25, 5)).toBe(5);
});

test('Div() -- floats', () => {
  expect(myFunctions.div(0.75, 0.5)).toBe(1.5);
});

test('Div() -- negative number', () => {
  expect(myFunctions.div(24, -3)).toBe(-8);
});

test('Div() -- div by 0', () => {
  expect(() => {
    myFunctions.div(10, 0)
  }).toThrow("Divide by zero");
});

test('containsNumbers() -- empty string', () => {
  expect(myFunctions.containsNumbers("")).toBeFalsy();
});

test('containsNumbers() -- string with numbers', () => {
  expect(myFunctions.containsNumbers("h3llo")).toBeTruthy();
});

test('containsNumbers() -- string without numbers', () => {
  expect(myFunctions.containsNumbers("hello")).toBeFalsy();
});

test('containsNumbers() -- string with a space', () => {
  expect(myFunctions.containsNumbers("h llo")).toBeFalsy();
});
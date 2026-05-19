import { capitalize } from "./project.js";

test('capitalizes first letter of "water" to "Water"', () => {
  expect(capitalize("water")).toMatch("Water");
});

test('capitalizes first letter of "hello" to "Hello"', () => {
  expect(capitalize("hello")).toMatch("Hello");
});

test('capitalizes first letter of "peter" to "Peter"', () => {
  expect(capitalize("peter")).toMatch("Peter");
});

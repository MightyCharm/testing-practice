import { capitalize, reverseString } from "./project.js";

// tests for capitalize function
test('capitalizes first letter of "water" to "Water"', () => {
  expect(capitalize("water")).toBe("Water");
});

test('capitalizes first letter of "hello" to "Hello"', () => {
  expect(capitalize("hello")).toBe("Hello");
});

test('capitalizes first letter of "peter" to "Peter"', () => {
  expect(capitalize("peter")).toBe("Peter");
});

// test for reverseString function
test('reverses string "hello world" to "dlrow olleh"', () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test('reverses string "The Odin Project" to "tcejorP nidO ehT"', () => {
  expect(reverseString("The Odin Project")).toBe("tcejorP nidO ehT");
});

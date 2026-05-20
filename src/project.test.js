import { capitalize, reverseString } from "./stringFunctions.js";
import { calculator } from "./calculator.js";
import { caesarCipher } from "./cipher.js";

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

// tests for reverseString function
test('reverses string "hello world" to "dlrow olleh"', () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test('reverses string "The Odin Project" to "tcejorP nidO ehT"', () => {
  expect(reverseString("The Odin Project")).toBe("tcejorP nidO ehT");
});

// tests for calculator object
test("adds 3 and 4 to equal 7", () => {
  expect(calculator.add(3, 4)).toBe(7);
});

test("subtracts 5 from 10 to equal 5", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("divides 8 by 2 to equal 4", () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test("multiplies 3 and 4 to equal 12", () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

// tests for caeser cipher
test('shift string "," with shift factor 1 to ","', () => {
  expect(caesarCipher(",", 1)).toBe(",");
});

test('shift string "a" with shift factor 1 to "b"', () => {
  expect(caesarCipher("a", 1)).toBe("b");
});

test('shift string "xyz" with shift factor 3 to "abc"', () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test('shift string "HeLLo" with shift factor 3 to "KhOOr"', () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test('shift string "Hello, World!" with shift factor 3 to "Khoor, Zruog!"', () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test('shift string "a" with shift factor -4 to "w"', () => {
  expect(caesarCipher("a", -4)).toBe("w");
});

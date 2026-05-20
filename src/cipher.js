const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function caesarCipher(string, shift) {
  const result = string.split("").map((value) => {
    const lowerCaseCheck = lowerCaseLetter.indexOf(value);
    const upperCaseCheck = upperCaseLetter.indexOf(value);
    // if both -1, value isn't a letter, just return value
    if (lowerCaseCheck <= -1 && upperCaseCheck <= -1) {
      return value;
    }
    if (lowerCaseCheck > -1) {
      const shiftedIndex = getShiftedIndex(lowerCaseCheck, shift);
      return lowerCaseLetter[shiftedIndex];
    } else {
      const shiftedIndex = getShiftedIndex(upperCaseCheck, shift);
      return upperCaseLetter[shiftedIndex];
    }
  });
  return result.join("");
}

function getShiftedIndex(index, shift) {
  return (index + shift + 26) % 26;
}

export { caesarCipher };

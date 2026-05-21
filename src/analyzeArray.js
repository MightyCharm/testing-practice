function analyzeArray(numbers) {
  const obj = {
    average: numbers.reduce((acc, num) => acc + num, 0) / numbers.length,
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    length: numbers.length,
  };
  return obj;
}

export { analyzeArray };

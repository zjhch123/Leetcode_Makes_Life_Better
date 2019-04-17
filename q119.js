/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const currentLine = [1]
  const currentLineSize = rowIndex + 1

  for (let i = 1; i < currentLineSize; i++) {
    currentLine[i] = currentLine[i - 1] * (rowIndex - i + 1) / i
  }

  return currentLine;
};
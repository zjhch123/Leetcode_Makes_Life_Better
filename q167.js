/**
 * Double Point
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    const a = numbers[left]
    const b = numbers[right]

    if (a + b === target) {
      return [left + 1, right + 1]
    } else if (a + b < target) {
      left += 1
    } else {
      right -= 1
    }
  }

  return []
};
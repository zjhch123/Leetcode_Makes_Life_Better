/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  const findSmallest = (array, startIndex, endIndex) => {
    let min = array[startIndex]
    let smallestIndex = startIndex

    for (let i = startIndex; i <= endIndex; i++) {
      if (array[i] < min) {
        min = array[i]
        smallestIndex = i
      }
    }

    return [min, smallestIndex]
  }

  const helper = (nums, start, end) => {
    if (start === end) {
      return nums[start]
    }

    const [ smallest, smallestIndex ] = findSmallest(nums, start, end)
    const current = (end - start + 1) * smallest
    const left = smallestIndex === start ? 0 : helper(nums, start, smallestIndex - 1)
    const right = smallestIndex === end ? 0 : helper(nums, smallestIndex + 1, end)

    return Math.max(current, left, right)
  }

  if (heights === null || heights.length === 0) { return 0 }

  return helper(heights, 0, heights.length - 1)
};
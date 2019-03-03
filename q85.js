/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  var largestRectangleArea2 = function(heights) {
    if (heights === null || heights.length === 0) {
      return 0
    }
    const stack = []
    
    let index = 0
    let max = 0
  
    while (index < heights.length) { // 构造单调递增栈, 顺便计算最大值
      const height = heights[index++]
      if (stack.length === 0 || stack[stack.length - 1] <= height) {
        stack.push(height)
      } else {
        let count = 1
        while (stack[stack.length - count] > height) {
          const outer = stack[stack.length - count]
          max = Math.max(outer * count, max)
          stack[stack.length - count] = height
          count += 1
        }
        stack.push(height)
      }
    }
  
    const size = stack.length
    for (let i = 0; i < stack.length; i++) {
      max = Math.max(stack[i] * (size - i), max)
    }
  
    return max
  };
  
  if (matrix === null || matrix.length === 0) {
    return 0
  }

  matrix = matrix.map(m => m.map(i => Number(i)))

  const heights = matrix[0]
  let max = largestRectangleArea2(heights)

  for (let i = 1; i < matrix.length; i++) {
    const addon = matrix[i]
    for (let i = 0; i < addon.length; i++) {
      if (addon[i] === 0) {
        heights[i] = 0
      } else {
        heights[i] += addon[i]
      }
    }

    max = Math.max(max, largestRectangleArea2(heights))
  }

  return max
};
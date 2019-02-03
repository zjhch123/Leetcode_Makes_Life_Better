/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let result = 0

  let maxLeft = []
  let maxRight = []

  maxLeft[0] = height[0]
  for (let i = 1; i < height.length; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i])
  }

  maxRight[height.length - 1] = height[height.length - 1]
  for (let i = height.length - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], height[i])
  }

  for (let i = 0; i < height.length; i++) {
    result += Math.min(maxLeft[i], maxRight[i]) - height[i]
  }
  
  return result
};

console.log(trap([4, 2, 3]));
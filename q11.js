/**
 * @param {number[]} arr
 * @return {number}
 */
var maxArea = function(arr) {
  let left = 0
  let right = arr.length - 1

  let max = Math.min(arr[left], arr[right]) * (right - left)

  while (right > left) {
    if (arr[right] > arr[left]) {
      left ++
    } else {
      right --
    }

    max = Math.max(max, Math.min(arr[left], arr[right]) * (right - left))
  }
  
  return max
};
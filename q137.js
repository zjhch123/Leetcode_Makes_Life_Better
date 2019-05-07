/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const nn = nums.sort((a, b) => a - b)

  for (let i = 0; i < nn.length; i++) {
    if (i === 0) {
      if (nn[i] !== nn[i + 1]) {
        return nn[i]
      }
      continue
    }
    if (i === nn.length - 1) {
      if (nn[i] !== nn[i - 1]) {
        return nn[i]
      }
      continue
    }
    if (nn[i] !== nn[i - 1] && nn[i] !== nn[i + 1]) {
      return nn[i]
    }
  }

  return -1
};

console.log(singleNumber([43,16,45,89,45,-2147483648,45,2147483646,-2147483647,-2147483648,43,2147483647,-2147483646,-2147483648,89,-2147483646,89,-2147483646,-2147483647,2147483646,-2147483647,16,16,2147483646,43]))
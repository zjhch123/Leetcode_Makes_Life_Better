/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums === null || nums.length < 2) {
    return 0
  }

  const max = Math.max(...nums)
  const aux = Array(nums.length)
  let exp = 1
  let ret = 0

  while (Math.floor(max / exp) > 0) {
    const count = Array(10).fill(0)

    for (let i = 0; i < nums.length; i++) {
      count[Math.floor(nums[i] / exp) % 10] += 1
    }

    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1]
    }
    for (let i = nums.length - 1; i >= 0; i--) {
      aux[--count[Math.floor(nums[i] / exp) % 10]] = nums[i]
    }

    for (let i = 0; i < nums.length; i++) {
      nums[i] = aux[i]
    }

    exp *= 10
  }

  for (let i = nums.length - 1; i > 0; i--) {
    ret = Math.max(nums[i] - nums[i - 1], ret)
  }

  return ret
};

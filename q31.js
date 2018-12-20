/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let length = nums.length

  let i, k
  for (i = length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      break
    }
  }

  for (k = length - 1; k > i; k--) {
    if (nums[k] > nums[i]) {
      break
    }
  }

  swap(nums, i, k)

  i += 1

  while (i < length - 1) {
    swap(nums, i, length - 1)
    i += 1
    length -= 1
  }

};

const swap = (nums, i, j) => {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}
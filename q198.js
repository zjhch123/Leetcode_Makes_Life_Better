/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let pre2 = 0
  let pre1 = 0

  for (let i = 0; i < nums.length; i++) {
    let cur = Math.max(nums[i] + pre2, pre1)
    pre2 = pre1
    pre1 = cur
  }

  return pre1
};
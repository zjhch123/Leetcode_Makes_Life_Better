/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length <= 1) {
    return true
  }

  let left = 1
  let right = nums[0]

  const target = nums.length - 1

  while (left <= right) {
    const tRight = left + nums[left]
    right = Math.max(right, tRight)
    left += 1

    if (right >= target) {
      return true
    }
  }

  return false
};

console.log(canJump([4,1,2,4,0,2,0,1,3,0,4,2]))
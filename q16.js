/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length == 3) {
    return nums[0] + nums[1] + nums[2]
  }

  let ret = -999999

  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    const num1 = nums[i]

    let left = i + 1
    let right = nums.length - 1

    while (right > left) {
      let addend = num1 + nums[left] + nums[right]

      if (Math.abs(target - addend) < Math.abs(target - ret)) { // 当前3数相加距离target的距离小于之前的
        ret = addend
      } 

      if (addend < target) {
        left += 1
      } else if (addend == target) {
        return target
      } else {
        right -= 1
      }
    }
  }

  return ret
};

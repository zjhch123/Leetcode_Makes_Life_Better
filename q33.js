/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) {
    return -1
  }

  let left = 0
  let right = nums.length

  let mid = 0
  for (; mid < nums.length - 1; mid++) {
    if (nums[mid] > nums[mid + 1]) {
      break
    }
  }
  if (mid === nums.length - 1) {
    right = mid
  } else {
    if (target <= nums[mid] && target >= nums[left]) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return bSearch(nums, left, right, target)
};

const bSearch = function(nums, left, right, target) {
  if (left == right) {
    return nums[left] === target ? left : -1
  }
  let mid = Math.floor((left + right) / 2)
  if (nums[mid] < target) {
    return bSearch(nums, mid + 1, right, target)
  } else if (nums[mid] > target) {
    return bSearch(nums, left, mid, target)
  } else {
    return mid
  }
}
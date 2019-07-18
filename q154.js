/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums === null || nums.length === 0) {
    return 0
  }

  let [left, right] = [0, nums.length - 1];

  if (nums[left] < nums[right]) {
    return nums[0]
  }

  while (left < right) {
    while (left < right && nums[left] === nums[left + 1]) {
      left += 1
    }

    const mid = ~~((left + right) / 2)

    if (nums[left] <= nums[mid] && nums[right] < nums[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return nums[left]
};

console.log(findMin([2,2,2,2,2,3,3,3,3,3,0,2,2,2,2,2,2]))


// 2 2 1 2 2 2

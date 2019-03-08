/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  const bSearch = function(nums, start, end, val) {
    let left = start
    let right = end

    if (val <= nums[start]) {
      return 0
    }
    if (val >= nums[end]) {
      return end + 1
    }

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (nums[mid] === val) {
        return mid
      } else if (nums[mid] > val) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    return left
  }

  for (let i = 0; i < n; i++) {
    const insertIndex = bSearch(nums1, 0, m + i - 1, nums2[i])
    nums1.splice(insertIndex, 0, nums2[i])
    nums1.pop()
  }

  return nums1
};

console.log(merge([2,3,4,0,0,0], 3, [1,2,3], 3))
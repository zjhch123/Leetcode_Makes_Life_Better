/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let ptr = 0

  const swap = (i, j) => {
    const k = nums[i]
    nums[i] = nums[j]
    nums[j] = k
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== 0) {
      swap(ptr++, i)
    }
  }
};
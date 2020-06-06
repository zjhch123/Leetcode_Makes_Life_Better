/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const long = nums1.length > nums2.length ? nums1 : nums2
  const short = nums1.length > nums2.length ? nums2 : nums1

  const map = new Map();
  const result = [];

  for (let num of short) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }

  for (let num of long) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num)
      map.set(num, map.get(num) - 1)
    }
  }

  return result
};

intersect([1,2,2,1], [2,2]);
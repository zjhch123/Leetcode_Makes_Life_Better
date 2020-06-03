/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 2 * 10^4
It's guaranteed that nums[i] fits in a 32 bit-signed integer.
k >= 0
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let now = 0,
      start = 0;
  let prev = nums[now]
  let times = 0

  while (times < nums.length) {
    const next = (now + k) % nums.length

    const element = nums[next]
    nums[next] = prev

    if (next === start) {
      now = next + 1
      start = now
      prev = nums[now]
    } else {
      prev = element
      now = next
    }

    times += 1
  }
};

const n = [1,2,3,4,5,6,7,8]
rotate(n, 3)
n.forEach(i => console.log(i))

// 1,2,3,4,5,6,7   3
// 5,6,7,1,2,3,4
/*
0 -> 3
1 -> 4
2 -> 5
3 -> 6
6 -> 2
5 -> 1
4 -> 0
*/
// 1,2,3,4
/*
0 -> 2
2 -> 0
1 -> 3
3 -> 1
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  const build = (nums) => {
    if (nums.length === 0) {
      return null
    }
    if (nums.length === 1) {
      const root = new TreeNode(nums[0])
      return root
    }

    const mid = Math.floor(nums.length / 2)
    const midNums = nums[mid]

    const [ leftNums, rightNums ] = [
      nums.slice(0, mid),
      nums.slice(mid + 1)
    ]
    
    const root = new TreeNode(midNums)

    const left = build(leftNums)
    const right = build(rightNums)

    root.left = left
    root.right = right

    return root
  }

  return build(nums)
};
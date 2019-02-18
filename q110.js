/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let result = true

  const depth = function(root) {
    if (root === null) return 0
    const left = depth(root.left)
    const right = depth(root.right)

    if (Math.abs(left - right) > 1) result = false

    return Math.max(left, right) + 1
  }

  depth(root)

  return result
};
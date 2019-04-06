/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) {
    return false
  }

  const dfs = (root, now) => {
    if (root.left === null && root.right === null && now === sum) {
      return true
    }

    if (root.left && dfs(root.left, now + root.left.val)) {
      return true
    } else if (root.right && dfs(root.right, now + root.right.val)) {
      return true
    } else {
      return false
    }
  }

  return dfs(root, root.val)
};
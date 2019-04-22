/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let max = -999999

  const dfs = (root) => {
    if (root === null) {
      return 0
    }

    const left = dfs(root.left)
    const right = dfs(root.right)

    const ret = Math.max(root.val + left, root.val + right, root.val, root.val + left + right)

    if (ret > max) {
      max = ret
    }

    return Math.max(root.val, root.val + left, root.val + right)
  }

  dfs(root, true)

  return max
};
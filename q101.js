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
var isSymmetric = function(root) {
  const dfs = (root1, root2) => {
    if (root1 === null && root2 === null) {
      return true
    }
    if (root1 === null || root2 === null) {
      return false
    }
    if (!dfs(root1.left, root2.right)) {
      return false
    }

    const val1 = root1.val
    const val2 = root2.val

    if (val1 !== val2) {
      return false
    }

    return dfs(root1.right, root2.left)
  }

  return dfs(root, root)
};
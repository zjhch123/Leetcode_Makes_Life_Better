/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  const dfs = (root1, root2) => {
    if (root1 === null && root2 === null) {
      return true
    }

    if (root1 === null || root2 === null) {
      return false
    }

    if(!dfs(root1.left, root2.left)) {
      return false
    }
    if (root1.val !== root2.val) {
      return false
    }
    return dfs(root1.right, root2.right)
  }

  return dfs(p, q)
};
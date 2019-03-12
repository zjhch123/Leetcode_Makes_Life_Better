/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (root === null) {
    return []
  }
  const ret = []

  const dfs = (root) => {
    if (root === null) {
      return
    }
    dfs(root.left)
    ret.push(root.val)
    dfs(root.right)
  }

  dfs(root)

  return ret
};
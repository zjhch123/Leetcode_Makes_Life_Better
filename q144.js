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
var preorderTraversal = function(root) {
  const ret = []

  if (root === null) {
    return ret
  }

  const preorder = (root) => {
    if (root === null) {
      return
    }

    ret.push(root.val)
    preorder(root.left)
    preorder(root.right)
  }

  preorder(root)

  return ret
};
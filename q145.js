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
var postorderTraversal = function(root) {
  const ret = []

  const postOrder = (root) => {
    if (root === null) {
      return
    }

    postOrder(root.left)
    postOrder(root.right)
    ret.push(root.val)
  }

  postOrder(root)

  return ret
};
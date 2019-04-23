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
var sumNumbers = function(root) {
  if (root === null) {
    return 0
  }

  const numbers = []

  const dfs = (node, num) => {
    if (node.left === null && node.right === null) {
      num = num * 10 + node.val
      numbers.push(num)
      return
    }

    const nextValue = num * 10 + node.val

    if (node.left) {
      dfs(node.left, nextValue)
    }

    if (node.right) {
      dfs(node.right, nextValue)
    }
  }

  dfs(root, 0)
  return numbers.reduce((a, b) => a + b, 0)
};
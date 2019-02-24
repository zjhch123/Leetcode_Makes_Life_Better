/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const ret = []

  const backtracking = (root, temp = []) => {
    if (root === null) {
      return
    }

    temp.push(root.val)
    if (root.left === null && root.right === null) {
      ret.push(temp.join('->'))
    } else {
      backtracking(root.left, temp)
      backtracking(root.right, temp)
    }
    temp.length = temp.length - 1
  }

  backtracking(root)
  return ret
};
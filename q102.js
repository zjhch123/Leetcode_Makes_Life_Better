/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) {
    return []
  }

  const ret = []
  const queue = [root]

  while (queue.length > 0) {
    const numbers = []
    let count = queue.length

    while (count > 0) {
      count -= 1
      
      const node = queue.shift()
      if (node === null) {
        continue
      }

      queue.push(node.left, node.right)
      numbers.push(node.val)
    }

    if (numbers.length > 0) {
      ret.push(numbers)
    }
  }

  return ret
};
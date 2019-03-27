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
var zigzagLevelOrder = function(root) {
  if (root === null) {
    return []
  }

  const ret = []
  const queue = [root]

  let direction = true // left to right

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
      if (!direction) {
        numbers.reverse()
      }
      ret.push(numbers)
    }

    direction = !direction
  }

  return ret
};
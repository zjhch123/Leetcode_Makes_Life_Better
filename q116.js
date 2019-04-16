/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  const floor = []

  const dfs = (root, floorIndex) => {
    if (root === null) {
      return
    }

    const prev = floor[floorIndex]
    root.next = null

    if (typeof prev !== 'undefined') {
      prev.next = root
    }

    floor[floorIndex] = root

    dfs(root.left, floorIndex + 1)
    dfs(root.right, floorIndex + 1)
  }

  dfs(root, 0)

  return root
};
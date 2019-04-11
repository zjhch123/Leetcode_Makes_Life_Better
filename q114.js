/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  const dfs = (root) => {
    if (root === null) {
      return null
    }

    let retHead = root
    let retTail = root

    const leftFlattened = dfs(root.left)
    const rightFlattened = dfs(root.right)
    
    root.left = null
    root.right = null

    if (leftFlattened !== null) {
      const [ head, tail ] = leftFlattened
      root.right = head
      retTail = tail
    }

    if (rightFlattened !== null) {
      const [ head, tail ] = rightFlattened
      retTail.right = head
      retTail = tail
    }

    return [ retHead, retTail ]
  }

  dfs(root)
};
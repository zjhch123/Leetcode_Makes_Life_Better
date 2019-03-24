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
var recoverTree = function(root) {
    let one = null
    let another = null
    let pre = null

    const dfs1 = (root) => {
      if (root === null || one !== null) { return }
      dfs1(root.left)

      if (pre === null) {
        pre = root
      }

      if (one === null && pre.val > root.val) {
        one = pre
      }
      
      pre = root
      dfs1(root.right)
    }

    const dfs2 = (root) => {
      if (root === null || another !== null) { return }
      dfs2(root.right)
      if (pre === null) {
        pre = root
      }

      if (another === null && pre.val < root.val) {
        another = pre
      }

      
      pre = root
      dfs2(root.left)
    }

    dfs1(root)
    pre = null
    dfs2(root)

    if (one !== null && another !== null) {
      let temp = one.val
      one.val = another.val
      another.val = temp
    }
};
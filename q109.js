/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  const findMid = (head) => {
    let prevNode = null
    let slowNode = head
    let fastNode = head

    while (fastNode !== null && fastNode.next !== null) {
      prevNode = slowNode
      slowNode = slowNode.next
      fastNode = fastNode.next.next
    }

    if (prevNode !== null) {
      prevNode.next = null
    }

    return slowNode
  }

  const build = (head) => {
    if (head === null) {
      return null
    }

    const mid = findMid(head)
    const midNode = new TreeNode(mid.val)

    if (mid === head) {
      return midNode
    }

    midNode.left = build(head)
    midNode.right = build(mid.next)

    return midNode
  }

  return build(head)
};
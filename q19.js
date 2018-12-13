/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (n == 0) {
    return head
  }
  
  let i = 0
  let node = head
  let nthNode = head
  while (node != null) {
    if (i > n) {
      nthNode = nthNode.next
    }
    node = node.next
    i++
  }

  if (i == 1 || i == 0) return null
  if (i - n === 0) return head.next

  nthNode.next = nthNode.next.next

  return head
};

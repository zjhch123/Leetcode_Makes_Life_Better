/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null || head.next === null) {
    return false
  }

  let ptr = head
  let nPtr = head

  while (ptr && nPtr && nPtr.next) {
    ptr = ptr.next
    nPtr = nPtr.next.next
    if (ptr === nPtr) {
      return true
    }
  }

  return false
};
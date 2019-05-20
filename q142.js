/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null || head.next === null) {
    return null
  }

  let meet = null

  let ptr = head
  let nPtr = head

  while (nPtr && ptr && nPtr.next) {
    ptr = ptr.next
    nPtr = nPtr.next.next
    
    if (nPtr === ptr) {
      meet = ptr
      break
    }
  }

  if (meet !== null) {
    let start = head
    while (start !== meet) {
      start = start.next
      meet = meet.next
    }
    return meet
  }

  return null
};
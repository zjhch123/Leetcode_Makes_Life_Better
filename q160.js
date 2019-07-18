/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let ptr1 = headA
  let ptr2 = headB
  

  while (ptr1 !== ptr2) {
    ptr1 = ptr1 === null ? headB : ptr1.next
    ptr2 = ptr2 === null ? headA : ptr2.next
  }

  return ptr1
};
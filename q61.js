/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head === null || head.next === null) {
    return head
  }

  let ptr = head
  let length = 1
  for (; ptr.next !== null; ptr = ptr.next) {
    length += 1
  }
  
  ptr.next = head
  k = length - k % length

  for (let i = 0; i < k - 1; i++) {
    head = head.next
  }

  ptr = head
  head = head.next
  ptr.next = null

  return head
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let prefix = 0
  let head = new ListNode(-1)
  let ptr = head
  let sum = 0
  while (prefix || l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + prefix
    prefix = sum > 9 ? 1 : 0
    ptr.next = new ListNode(sum % 10)
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
    ptr = ptr.next
  }

  if (prefix) {
    ptr.next = new ListNode(prefix)
  }

  return head.next
};


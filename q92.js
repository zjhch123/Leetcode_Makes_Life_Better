/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (head === null || head.next === null) {
    return head
  }
  const stack = []
  const newHead = new ListNode(null)

  let ptr = newHead
  let index = 1

  while (head !== null) {
    if (index >= m && index <= n) {
      stack.push(head)
      head = head.next
      index += 1
      continue
    }

    if (index > n && stack.length !== 0) {
      while (stack.length > 0) {
        ptr.next = new ListNode(stack.pop().val)
        ptr = ptr.next
      }
    }

    ptr.next = new ListNode(head.val)
    ptr = ptr.next
    head = head.next
    index += 1
  }

  while (stack.length > 0) {
    ptr.next = new ListNode(stack.pop().val)
    ptr = ptr.next
  }

  return newHead.next
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  const arr = []
  let ptr = head

  while (ptr) {
    arr.push(ptr)
    ptr = ptr.next
  }

  ptr = arr[0]

  for (let i = 1, j = arr.length - 1; i <= j; i += 1, j -= 1) {
    ptr.next = arr[j]
    arr[j].next = arr[i]

    ptr = arr[i]
  }

  ptr.next = null
};
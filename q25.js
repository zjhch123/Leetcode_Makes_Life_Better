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
var reverseKGroup = function(head, k) {
  if (!head) {return null};
  let currentNode = head, kGroup = [], newHead, newTail;

  while (currentNode) {
    for (let i = 0; i < k; i++) {
      if (currentNode) {
        kGroup.push(currentNode);
        currentNode = currentNode.next;
      } else {
        break;
      }
    }

    if (kGroup.length === k) {
      kGroup.reverse();
    }

    for (let i = 0; i < kGroup.length; i++) {
      if (!newHead) {
        newHead = kGroup[i];
        newTail = kGroup[i];
      } else {
        newTail.next = kGroup[i];
        newTail = kGroup[i];
      }
    }

    kGroup = [];
  }

  newTail.next = null;
  return newHead;
};
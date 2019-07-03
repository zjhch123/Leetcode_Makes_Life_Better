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
var sortList = function(head) {
  const sort = function(h) {
    if (h === null || h.next === null) {
      return h;
    }
    const mid = findMid(h);
    const leftHead = h;
    const rightHead = mid.next;
    mid.next = null;

    const left = sort(leftHead);
    const right = sort(rightHead);

    return merge(left, right);
  }

  const findMid = function(head) {
    let fast = head.next;
    let slow = head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return slow;
  }

  const merge = function(leftNode, rightNode) {
    const start = new ListNode();
    let cur = start;

    while (leftNode !== null && rightNode !== null) {
      if (leftNode.val < rightNode.val) {
        cur.next = leftNode
        leftNode = leftNode.next
      } else {
        cur.next = rightNode
        rightNode = rightNode.next
      }
      cur = cur.next
    }

    if (leftNode !== null) {
      cur.next = leftNode
    }

    if (rightNode !== null) {
      cur.next = rightNode
    }

    return start.next;
  }

  return sort(head);
};
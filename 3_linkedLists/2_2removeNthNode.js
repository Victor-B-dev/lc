/* Leetcode # 19 - Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]


Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz

Follow up: Could you do this in one pass? */

// Brute Force - Changing it into an array to be able to get to the correct

var removeNthFromEnd = function(head, n){
  const nodes =[];
  let current = head;
  while (current){
    nodes.push(current)
    current= current.next;
  }

  const removeIndex = nodes.length - n;
  if (removeIndex === 0){  // if we're removing the first node
    return head.next; // we return from the second node
  }

  nodes[removeIndex - 1].next = nodes[removeIndex].next; // otherwise we set the previous node's next to the removed node's next (circumventing it)
  return head;
}


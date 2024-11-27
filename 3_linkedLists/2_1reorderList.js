/* Leetcode Problem # 143 - Reorder List


You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln

Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.


Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]


Constraints:
The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000 */

/* The question is asking us to reorder the list such that after the head:
:it reorders (formerly) last element, second element, second to last element, etc. 

We need two pointers/temp values to keep track of our placements as we iterate through the list.
Onethe pointer at the end has pointers going in the wrong way (we can reverse it), but also how do we know where the half begins to know where to reverse from (slow fast pointer).
We also need to be wary of when the two pointers intersect such that we don't have an infinite cycle nor leave out any elements.*/

// Brute Force

var functionBF = function (head) {
  const nodes = []; // move all the nodes into an array because we can just use two pointers
  let current = head;
  while (current){
    nodes.push(current);
    current = current.next;
  }

  let i = 0;
  let j= nodes.length -1;
  while (i < j){
    nodes[i].next = nodes[j]; // traverse from the start to the end
    i++; // increment
    if (i >=j) break; // have break condition when they meet in the middle, this is for the case of odd # lists
    nodes[j].next = nodes[i]; // traverse break
    j--;
  }
  nodes[i].next = null; // add a null to the list end
}

// Reverse and Merge (Optimal - no extra space needed)
var reorderListRM = function (head) {
  // we use the slow fast pointer algorithm (reverse linked list problem) to find the middle of the linked list
  let slow = head;
  let fast= head.next;
  while (fast!== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;
  }

  // we use the slow pointer's next to denote the second half of the linked list & use the reversing algorithm on it
  let second = slow.next;
  let prev = (slow.next = null); // we make the second's "head" point to null
  while (second !== null) { // start reversing
    const temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  // begin merging  merge twoSortedLinkedLists)
  let first = head; // first list
  second = prev; // second list
  while (second !== null) {
    const temp1 = first.next; // have temp variables to hold the next pointer positions so they can be traversed to
    const temp2 = second.next;
    first.next = second; // move the next to the other list to reorder it
    second.next = temp1; // 
    first = temp1;
    second = temp2;
  }
}

/* It will help to see the algorithm in action. I'm going to write it as arrays but they aren't, it's just to show the reordering.

[1,2,3,4,5,6,7,8,9,10,null] Find the middle, if we do tortoise hare, then it's basically "dividing in 2" when the fast pointer reaches the end, the slow will be at the midpoint.
First [1,2,3,4,5,null] Second [10,9,8,7,6,null] "Split" this in half and reverse it.

End Result - Merging- Let's work through it as steps.
[1,10,2,9,3,8,7,4,5,6,null]

We store the first.next and second.next in temps because otherwise we would not be able to iterate through the list.
First.next = 2, Second.next = 9

Traverse from 1 to 10. Make first.next go to second. Line 63.
Traverse from 10 to 2. Make second.next go to temp 1. Line 64.
Shift the positions along, line 65-66.

The while loop is second !== null due to it being the fast pointer. */
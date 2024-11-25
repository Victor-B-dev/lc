/* Leetcode Problem # 206 - Reversee Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

 
Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
*/

// Iterative - Learn both ways, essential (sub) problem needed to solve future linked list problems

var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current){ // runs until current becomes falsey ie when it encounters null
    let temp = current.next; // the pointer from 1 to 2 is stored in a temporary variable
    current.next = prev; // the pointer is now reversed to the previous ie null in the first case
    prev = current; // the previous pointer now becomes the current (shifting left +1)
    current = temp; // the current pointer uses teh temp to move to next node (shifting right +!)
  }
  return prev;
}

/* With the iterative process, we are going to use two pointers, one that is current and one that is going to be the prev.
You also need a temporary variable.

In terms of steps we can think of it as 4 steps to remember:
Store next, next reversed, shift left, shift right.

TimeSpace is O(n) & O(1) respectively.
*/

// Recursion

var reverseListRecursive = function (head) {
  if (head === null || head.next === null){ // base case when there's one node or the pointer is going to null ie we have reached the tail
    return head;
  }

  let reversedList = reverseListRecursive(head.next); // recursively call the function on the head.next pointer

  head.next.next = head; // where it begins reversing, by taking in head.next to point at the current node
  head.next = null; // takes current node .next and makes it the "tail", pointing it to nothing "breaks" the original list direction

  return reversedList;
}

/* This takes additional space since the it grows with each call made until it starts returning.

*/


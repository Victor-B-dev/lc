/* Leetcode # 2 - Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.


Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]


Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.*/

/* Wrapping one's head around doing the calculation correctly is the hard part.
We need to implement carry (hint provided by Leetcode) which are basically 0 place holders so the correct digits add with each other.

E.g. if we are adding 342 + 465 = 807.
The 3 and 4 digits are in actuality 300 + 400 = 700, with the 800 being the a result of 40 + 60.*/

// Iterative

var addTwoNumbers = function(l1, l2) {
  const dummy = new ListNode();
  let current = dummy;

  let carry = 0;
  while (l1 || l2 || carry) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;

    let val = v1 + v2 + carry;
    carry = Math.floor(val / 10);
    val = val % 10;
    current.next = new ListNode(val);

    current = current.next;
    v1 = l1 ? l1.next : null;
    v2 = l2 ? l2.next : null;
  }

  return dummy.next;
}
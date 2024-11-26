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
We also need to be wary of when the two pointers intersect such that we don't have an infinite cycle nor leave out any elements.*/
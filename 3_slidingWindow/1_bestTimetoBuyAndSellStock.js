/* Leetcode problem # 121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

 

Constraints:
1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

// Brute Force
var maxProfit = function (prices) {
  let result = 0; // base case would be not worth buying
  for (let i = 0; i < prices.length; i++){
    let buy = prices[i];
      for (let j = i + 1; j < prices.length; j++){
        let sell = prices[j];
        result= Math.max(result, sell - buy);
      }
  }

  return result;
}

/* Brute force is an inefficient O(n^2).
Comparing every subsequent string is slow. 
If we drew this out in a graph, we would know this is similiar to two pointers problenm, containers with max water.
*/



/* There's quite few of these.
*/
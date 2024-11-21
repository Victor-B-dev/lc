/* Leet Code #875 - Koko Eating Bananas

Koko loves to eat bananas. 
There are n piles of bananas, the "i"th pile has "piles[i]"" bananas.
The guards have gone and will come back in "h" hours.
Koko can decide her bananas-per-hour eating speed of "k". 
Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
Return the minimum integer k such that she can eat all the bananas within h hours.

 
Example 1:
Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:
Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:
Input: piles = [30,11,23,4,20], h = 6
Output: 23

Constraints:
1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109

*/

/* Reading the problem I think it may be easier to understand with a bit of restating.
Solve for the minimum speed (bananas per hour) that koko needs to eat if we are given "h" the amount of time she has to eat.
We are also given different piles of different bananas #s.
We are also given the fact that she does not start another pile immediately when she finishes a pile. 

Other information we can infer is 2 things.
The minimum time it can take is piles.length because coco only eats at most one pile per hour.
Therefore the max rate for "k" that we care about is the pile with the max number of bananas in it.
For example 1, [3,6,7,11] that would be 11. 
The arbitrary minimum would be 1. So K would be value between [1...11].
We can use binary search on this range to more quickly solve the problem instead of brute forcing every solution.

Figuring out the bounds for the binary search is the tricky part
*/

var minEatingSpeed = function (piles, h){
  let left = 1;
  let right = Math.max(...piles);
  let result = right; // we set result to the right because it's the maximum number of bananas

  while (left <= right){
    const k = Math.floor((left + right) / 2); // we start the rate in the middle
    
    let totalTime = 0;
    for (const pile of piles){
      totalTime += Math.ceil (pile / k); // math.ceil rounds up to the nearest whole integer because coco always uses the whole hour
    }
    if (totalTime <= h) { // if the total time is less than or equal to the minimum hours
      result = k;
      right = k - 1;
    } else {
      left = k + 1;
    }
  }
  return result;
}


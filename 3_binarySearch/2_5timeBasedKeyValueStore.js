/* Leetcode # 981 - Time Based Key-Value Store
Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

TimeMap() Initializes the object of the data structure.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

Example 1:

Input
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
Output
[null, null, "bar", "bar", null, "bar2", "bar2"]

Explanation
TimeMap timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1);         // return "bar"
timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4);         // return "bar2"
timeMap.get("foo", 5);         // return "bar2"

Constraints:
1 <= key.length, value.length <= 100
key and value consist of lowercase English letters and digits.
1 <= timestamp <= 107
All the timestamps timestamp of set are strictly increasing.
At most 2 * 105 calls will be made to set and get.

*/

/* The fine print of the problem in the constraint lets us knokw that the timestamps are in increasing order.
This lets us know we can run a binary search on the time stamps.
*/

// Solution - Binary Search (Map)

var TimeMap = function (){
  this.map = new Map();
}

TimeMap.prototype.set = function (key, value, timestamp){
  if (!this.map.has(key)){ // if the key doesn't exist
    this.map.set(key, []); // set the key and an empty array as key value pair
  }

  this.map.get(key).push([value, timestamp]) // push the value/timestamp into the value for the key, need to do this way due to how it's stored
}

TimeMap.prototype.get = function (key, timestamp){
  const values = this.map.get(key) || []; // the || is for the condition that if a key doesn't exist as dictated by the original problem
  let left = 0
  let right = values.length - 1;
  let result = '';

  while (left <= right){
    const mid = Math.floor ((left + right) / 2);
    if (values[mid][1] <= timestamp) {
      result = values[mid][0]; // set result to the the string value of the time stamp
      left = mid + 1; // we have this occur after because the while loop will try to run again to verify if it's the exact value or not
    } else{
      right = mid - 1;
    }
  }

  return result
}

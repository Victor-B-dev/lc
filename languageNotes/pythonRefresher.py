# Dynamically Typed Language - variable and types are determeined at run time
n = 0
n = "abc" 

# for variable declaring, you can do it all in a single line
n, m = 0 , "abc"

# Incrementing - does not have ++
n = n + 1
n += 1
n =+ 1


# Null - In python it is none
n = none # actually not sure if none here is appropriate


# Conditionals (If statements) don't need parentheses, to denote a function you end the line with a colon :
# also functions are run based off 4 space indentation
if n > 2:
    n -= 1
elif n == 2: #there's no else if, the keyword is elif
    n *= 2
else: 
    n += 2


# multi line conditionals need to be wrapped in parentehses
# Also logic "and" and "or" are literally those words

n, m = 1, 2
if ((n > 2 and n!= m)
    or n == m):
    n += 1

#loops
while n < 5:
    print (n)
    n += 1

for i in range(5): #the increment is implicitly 1, it also excludes 5
    print(i)

for i in range(5, 1, -1): #this syntax is a bit tricky but follows other langs, initial, condition to run for, increment or decrement variable
    print(i)


# Decimal Division by Default
print (5 / 2) # actually gives 2.5, 
print (5 // 2) # integer division but it rounds down

# this actually causes problems e.g.
print (-3 // 2) # gives -2 BUT in other langs it would be -1 because most round towards zero

#work around
print (int(-3 / 2))

# Modulo also runs into this problem with negativbe numbers
print (-10 % 3)
# import math library to avoid these issue
import math
print(math.floor((3/2)))
print(math.ceil((3/2)))
print(math.sqrt((3/2)))

# max and min int - python numbers are infinite - they don't overflow
float ("inf")
float ("-inf")


# arrays (are called lists in Python, not be confused with linked lists) - dynamic arrays - can do normal array operations
arr = [1, 2, 3]

# can be used as a stack
arr.append(4)
arr.append(5)

arr.pop()

arr.insert(1, 7) # at index 1, insert 7

arr[0] = 0 # indexing
arr[3] = 5


# be careful with negative values as -1 in an array is the last number & penultimate
print(arr[-1]) # looking at line 72 then 83 if it, this would actually print 5


#sublists
arr = [1, 2, 3, 4]
print(arr[1:3])


#like the for loop ranges, teh last index is non inclusive
print(arr[0:4]) # how to get the whole thing

# unpacking - aka destructuring
a, b, c = [1, 2, 3] # each variable is assigned a value from the array/list, make sure the variable match the number of arrays

#Looping through arrays - properly
nums = [1, 2, 3, 4]

for i in range(len(nums)): #using index
    print(nums[i])

for n in nums: # without index
    print(nums[i])

for i, n in enumerate(nums): # enumerate - needing index and value
    print(i, n)

# loop through multiple arrays with unpacking
nums1 = [1,2,3]
nums2 = [4,5,6]
for n1, n2 in zip(nums,nums2):
    print(n1, n2)

 # reversing the array is a simple method
nums.reverse()

# Sorting - ascending by default
arr.sort()
arr.sort (reverse = True) # descennding order

# will be alphabetical
arr = ["bob", "alice", "sally"]
arr.sort()

# custom sort e.g. length of string
arr.sort(key=lambda x: len(x))

#list comprehension
arr = [i for i in range(5)] # does the for loop and adds it to the array as it loops
arr = [i + i for i in range(5)] # each additioan to the array is i + i
print(arr)

arr = [[0] * 4 for i in range(4)] # creates a 4x4 grid of 0s, 0*4 is the individual instance, the range is the number of times its happening, trying to skip the 4 loop will cause a reference error in that all the [0,0,0,0] are the same thing - 2d array issue


# Strings are single or double quoted
# They are IMMUTABLE
s = "A"

# this actually creates a new string - an O(n) operation
s += "def"

#valid numeration strings can be converted
print(int("123") + int ("123")) # 246
#and numbers can be converted to strings
print(str(123) + str(123)) #123123
#if you want the ASCII value, use ord
print(ord("a")) # 97

#Combine strings with a delimiter (empty)
strings = ["ab", "cd", "ef"]
print("".join(strings)) #abcdef

#queues are double ended queues by default
from collections import deque

queue = deque()
queue.append(1)
queue.append(2)

#different from a stack because we can pop/push from the left (i.e. the front)
queue.popleft() #this is O(1) instead of the usual O(n)
queue.appendleft(1) # also O(1), aka you get a new highest priority and are able to push it to the top of a queue 

#hashset
mySet = set()
print(len(mySet)) #check length
print(1 in mySet) #check if this value is in the set
mySet.remove(1) #remove this value if its in there

#list to set
print(set([1,2,3])) #pass the array etc in to the set

#set comprehension ie use a loop or other to try passing in values
mySet = { i for i in range(5)} # notice curly braces


#Hashmap - aka dict(ionaries)
myMap = {} # its an object
myMap["alice"] = 22 # no duplicate keys
myMap["alice"] = 80 # rewriting the value of alice
print(len(myMap)) # printing the length is valid

print("alice" in myMap) #searching for value O(1)
myMap.pop("alice") #removing value O(1)

myMap = {"jim":90, "bob": 70} # can initialize multiple values like this

for key in myMap: #looping through the map
    print(key, myMap[key]) #key, value

for val in myMap.values():
    print(val) #getting all the values, completely ignoring the keys


#Tuples - arrays but immutable
tup = (1,2,3) #written with () and not brackets
tup[0] = 0 # NOT A VALID OPERATION

# tuples are great as keys for a hashmap/set and this is because lists cannot be keys in python whereas we could do that in JS as arrays/object could actually be used if we really wanted to - i think


# Heaps (implemented as arrays under the hood) - they are minHeaps by default
import heapq

minHeap = []
heapq.heappush(minHeap, 3) # we use the imported object method to push to that specific heap
heapq.heappush(minHeap, 1) 
heapq.heappush(minHeap, 2) 

print(minHeap[0]) # the in will always be at index 0 so here it woudl be 1 due to line 213

while len(minHeap):
    print(heapq.heappop(minHeap)) # pop operation

#implementing a max heap - workaround - all the values you insert are negative, then multiply it by negative 1
maxHeap = [-7,-5,-3]

while len(maxHeap):
    print(-1 * heapq.heappop(maxHeap))

arr = [2,1,8,4,5]
heapq.heapify(arr) # building a heap from an existing array


#Functions
def firstFunction(n, m):
    return n * m

#nested functions have access to outer variables - useful in graph problems, can keep things concise but may be confusing at first
def outer (a, b):
    c = "c"

    def inner():
        return a + b + c
    return inner()

print (outer("a", "b"))

# you can modify but not reassign via helper functions
def double (arr, val):
    def helper():
        
        for i, n in enumerate(arr):
            arr[i] *= 2

        nonlocal val # if you dont' do this, it will only modify it's value inside this helper function and not affect the outer value, i.e in line 259, the val would remain 3
        val *= 2
    helper()
    print(arr, val)

nums = [1, 2]
val = 3
double(nums, val) # [2, 4], 6


# Class
class myClass:
    def __init__(self, nums): #__init__ is the constructor keyword, self is "this" in JS
        self.nums = nums
        self.size = len(nums)

    def getLength(self):
        return self.size
    
    def getDoubleLength(self):
        return 2 * self.getLength()
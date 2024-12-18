print("Hello, world!") # built in function for displaying output to console

# Python is an interpreted language, first released in 1991, read by an interpreter. In a compiled language, the code is translated into machine code before it is run.
# A script is a file that contains a series of commands that are executed by the computer. Automate repeititve stasks, python is great for this because of simpl & readability

print("My favorite quote is \"To be or not to be.\"") #as usual, escaping notation
print('My favorite quote is "To be or not to be."') #python also does this interpretation correctly with single quote then double quote, honestly just escape it

# syntax errors are familiar

message = "this string"
print(message)
print(message)

#Variable Naming Rules

# can only contain letters, nunbers, and underscores
# cant start with a number nor can it contain spaces
# can't be keywords

# Styling rules for Python - snake case
# camel case - first letter of each word is cap except first
# snake case is words separated by underscores (all lower)
# pascal case - each word is capitalized

capital_of_US = "Washington D.C."

# Multi Assignment - all variables on left, all values on the right
msg1, msg2 = "hello", "world"

# can do swaps - have to be in the same line like below
msg1, msg2 = msg2, msg1

#Python Types
age = 25
decimal = 98.6 #float
is_true = True
name = "John"
my_list = [1,2,3] # list/array

#Dynamic Typing
int variable = 10 # static typed languages require a variable to be declared with a type and are immutable
variable = "haha" 

# Type Casting - changing a type explicitly like string to integer or float to integer
variable = 10.9
print(int(variable)) # 10
int(variable) # would permanently change it, rounds down by default

# Type Errors 
message = "Hello"
message = int(message) # this will cause a type error

#Empty Variable - None instead of null
empty = None

#Math - if either of the operands are a float, it will always be a float
#Order of Operations follows PEMDAS

x,y = 3,6 
# Addition
print (x + y) #9
# Subtraction 
print(x-y) # -3
# Multiply 
print(x*y) #18
# Division - Alway a float
print(x/y) # .5

# Floor Division - Double // (this is actually the same in JS)
print(x//y) # 0
# Modulus - % (same in JS)
print(y % x) # 6/3 =2 so remainder = 0
# Exponentiation
print(x**y) 

#Shorthand Operators
count = 0
count += 1
count -= 1
count *= 1
count /= 1
count %= 1
count //= 1
count **= 1

#Boolean OR - in Python, it's keyword OR (but lowercase)
a = True
b = False
print (a or b) # True

#Boolean AND - lowercase "and"
print (a and b) # False

#Boolean Negation NOT - lowercase "not"
print (not a) # False
print (not b) # True
print (not (a and b))


#Functions - indentation matters - 4 spaces 
def greet():
    print ("Hello, world!")

greet() #call the function

#Parameters - passing in values OR variables
def greet(name):
    msg = "Hello," + name
    print(msg)

greet("John") # "Hello, John"

def greet2(name, greeting):
    message = greeting + " ", name
    print(message)

greet2("John", "Hello,")

def addition(x, y):
    return x + y

result = addition(3, 6)
print(result) # 9

#Type Hints - adding types to parameters being passed in and the return
def add_type(x: int, y: int) -> int: # this is optional in Python but is added for clarity, I should start doing this regularly
    return x + y # we expect x y to be integers and expect back an integer

def greet_type(name:str) -> None:
    print("Hello," + name) # printing to console means there's no return

#Default Arguments - variables with default values MUST come after variables without
def greet_default(random, name="world"):
    print(random + "Hello," + name + "!")

#with typing
def greet(greeting: str = "Hello World") -> str:
    print(greeting)

#Comparisons - returns boolean True False
x > y
x < y
x == y
x != y
x >= y
x <= y

# If statements - Important, variables declared in IF statements are not locally scoped, can be accessed after
# Else if - elif
account_balance = 100
def is_balance_low(balance:int) -> None:
    if (account_balance < 100):
        print("Your account balance is too low.")
    elif (account_balance == 0):
        print("Your balance is actually 0.")
    else:
        print("Your account balance is high enough.")

# in these if else elif chains, it will execute the only one statement then stop reading, even without a return
# in the above case, line #155 won't run actually since that can only be true if previous line is also true

# Some Flow Control
# Continue - stop iterating code, start the next iteration of the loop,
# break - stop code atlgoether

for i in range(1,8):
    if i == 3:
        continue
    if i == 6:
        break
    else:
        print(i)
# will output 1, 2, 4, 5  

#Length function - len
str = "Practice"
len(str) # outputs 8 because thats the number of the characters

# String indexing - zero indexed - same as JS
print(str[0]) # "P"
print(str[-1]) # "e" , easy way to get the last char

#Loops 
for i in range(len(str)):
    print(i) # will type out "Practice", note you don't need to do -1 in the length

i = 0
while i < 10:
    print(i)
    i += 2

for i in range(0, 10, 2):
    print(i)

for i in range(10, 0, -1): # won't include 0
    print(i)

for i in reversed(range(10)): # will print the same as line 196
    print(1)

#Shorthand for string looping
my_string = "hello"
for char in my_string: #char could be any variable; like a for in loop
    print(char)

# string concat - actually creating a new string

#slicing - access a portion of the string (substring via indices) - this also creates a new string
print(my_string[1:4]) #ell - from start to, but not including, end index
print(my_string[0:5]) # the full hello because end is not inclusive. end >len(my_string). it doesn't have the JS of needing length -1 syntax

print(my_string[:5]) # if you don't specify the start, it will assume 0
print(my_string[2:]) # similarly if you don't specify the end, it will start from the given start and include the rest of the string

print(my_string[::-1]) # reversing the string in total
print(my_string[0:2:-1]) # reverse the string from 1 to 0, since not including 2, so we would get "eh"

# strings are immutable hence the above behavior with slicing
# This will give us a TypeError if we try to reassign a character in a string e.g. my_string[0] = "X" 

def remove_fourth_character(word: str) -> str: # type: ignore
    before_word = word[0:3]
    after_word = word[4:]
    return before_word + after_word

#Format Method
name = "John"
age = 30

msg = "Hello, {}, You are {}.".format(name, age) # {} are the placeholder, fills in the spot in the order

#f-strings AKA template literlas
msg = f"Hello, {name}, You are {age}." #the syntax starts with an f


# Lists AKA Arrays
my_list = [1,2,3]

if len(my_list) > 0:
    print("List not empty")
else:
    print("The list is not empty")

if my_list: # boolean context - does this exist? Similar to JS
    print("List not empty")
else:
    print("The list is not empty")

if 1 in my_list: # "in" operator check if something is in the array, includes() in JS
    print("1 is in the list.")
else:
    print("1 is not in the list.")

if 4 not in my_list: # not in  
    print("4 is in the list.")
else:
    print("4 is not in the list.") 

def check_element(a_list, element) -> bool:
    return element in a_list # we don't have to write out the if else, just the statement that will be evaluated

from typing import List #need this typing  conversely could do from typing import * for everything (List, Dict, Tuple, Any, Union, etc)

# List looping example
def count_x(nums: List[int], x: int) -> int:
    count = 0
    for n in nums:
        if n == x:
            count += 1
    return count

# Common List functions - mutable
my_list = [1,2,3,4,5,6]
print(sum(my_list)) # add them all
print(min(my_list)) # lowest value in the list
print(max(my_list)) # highest value in the list

my_list.append(7) # append modifies the original list
print(my_list) #1,2,3,4,5,6,7

def add_elements(genericList: List[int], elements: List[int]) -> List[int]:
    for n in elements:
        genericList.append(n)
    return genericList

# .pop() by default will remove last element in the list, you can also pass in an index
my_list.pop() # 1, 2, 3, 4, 5, 6
my_list.pop(0) # 2, 3, 4, 5, 6
my_list.pop(3) # 2, 3, 4, 6

def pop_n_from_list(genericList: List[int], n: int) -> List[int]:
    while n > 0:
        genericList.pop()
        n -= 1
    return genericList

# List Find - getting the index at which an element is found
my_list = [1,2,3,4,5,3]
print(my_list.index(3)) # will return 2 - it returns the FIRST occurence

def find_index(nums: List[int], target: int) -> int:
    for i in range(len(nums)):
        n = nums[i]
        if n == target:
            return i

# negative indexes - VALID - going backwards from the end of the list 
print(my_list[-3]) # 4
print(my_list(len(my_list) - 3)) # length of the list - 3 would be the same thing, e.g the JS way of doing it, Python allows this more concise & common way of doing it

def get_last_elements(genericList: List[int], target: int) -> List[int]:
    return genericList[target:]


# Tuples - immutable
my_tuple = (4,5,6) # made with parantheses instead of brackets
print(my_tuple[1:]) #(5,6) - remember slicing doesn't modify original

#common for related data that won't be modified
#can call sum, min, max
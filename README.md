# challenges-and-data-structures
### Whiteboard Images

### Challenge A: Array Reversal  
![Array Reversal Whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/whiteboard-challenges/Array%20Reversal.png)

### Challenge B: Most Frequent Number  
![Most Frequent Number Whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/whiteboard-challenges/Most%20Frequent%20Number.png)

### Challenge 2: Minimum-Value  
### Challenge description: Writing a function that accept an array of integers, without using any built-in method. The function should return the smallest value in the array.
![Minimum value Whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/Mininmum-Value/whiteboard-challenges/minimumValue.png)

### Challenge 3: Reverse Characters
## Description:
Writing a function that takes a string as input and without using built in methods return the string with all characters reversed.

![Reverse Characters Output](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/Reverse-Characters/Challenges/Reverse-Characters/ReverseCharactersScreenshot.png)
![Reverse Characters Whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/Reverse-Characters/Challenges/Reverse-Characters/WhiteBoard.png)


### Challenge 4: Remove Middle Value

### Challenge Description :
Writing a function called RemoveMiddleValue that takes in an array as its parameter. Without utilizing any of the built-in methods available in the language, the function should remove the value at the middle index of the array. The function should then return the modified array.

### The Whiteboard Image: 
![Reverse Characters Output Screenshot](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/remove-middle-value/Challenges/Remove-Middle-value/Remove-middle-value-whiteboard.png)


# Linked List Implementation

# Singly Linked List - JavaScript Implementation

This project demonstrates the implementation of a Singly Linked List in JavaScript. It includes core functionalities such as adding, inserting, removing, checking for inclusion, and printing the list.

## Files

- `Node.js`: Defines the Node class.
- `LinkedList.js`: Implements the LinkedList class with methods such as `add`, `printList`, `remove`, `includes`, and `insertAt`.
- `app.js`: Demonstrates the usage of the LinkedList class.
- `LinkedList.test.js`: Contains Jest unit tests for all methods.
- `README.md`: This file.
- `whiteboard.png`: Whiteboard explanation of the implementation.
- `console-output.png`: Screenshot of the console output.

---

##  Features Implemented:

- `add(data)`
- `insertAt(index, data)`
- `remove(data)`
- `includes(data)`
- `printList()`

---

##  Whiteboard Visuals

###  Add Function
![Add function whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/Linked-List-Implementation/Data%20Structure/LinkedList/LinkedList-Implementation/images/Add-function-whiteboard.png.png)

---

###  Include Function
![Include function whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/Linked-List-Implementation/Data%20Structure/LinkedList/LinkedList-Implementation/images/Include-function-whiteboard.png.png)

---

###  InsertAt Function
![InsertAt function whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/Linked-List-Implementation/Data%20Structure/LinkedList/LinkedList-Implementation/images/InsertAt-function-whiteboard.png.png)

---

###  Remove Function
![Remove function whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/Linked-List-Implementation/Data%20Structure/LinkedList/LinkedList-Implementation/images/Remove-function-whiteboard.png.png)

---

###  PrintList Function
![PrintList function whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/Linked-List-Implementation/Data%20Structure/LinkedList/LinkedList-Implementation/images/printList-function-whiteboard.png.png)

---

##  Console Output

###  Console Output from Manual Testing
![Console output](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/Linked-List-Implementation/Data%20Structure/LinkedList/LinkedList-Implementation/images/console-output.png.png)

---

###  Console Output from Jest Tests
![Jest test output](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/Linked-List-Implementation/Data%20Structure/LinkedList/LinkedList-Implementation/images/console-jest.png.png)

---

##  How to Run

1. Clone the repository
2. Open the project in the code editor
3. Run the JavaScript file using Node.js:
```bash
node linkedlist.js




```


# 🔁 Reverse a Singly Linked List

> A function to reverse a singly linked list in-place using an efficient iterative approach.

---

## Description

This project includes the `reverse(list)` function that reverses a **singly linked list in place**, without creating a new list. It modifies the original list by reversing the direction of the links between nodes.

The implementation uses a classic three-pointer technique: `current`, `prev`, and `next`.

---

## Output

- The function **does not return any value (`void`)**.
- The input list is modified directly.
- After reversal, the head of the list points to what was previously the last node.

---

## Input

| Parameter | Type           | Description                      |
|-----------|----------------|----------------------------------|
| `list`    | `LinkedList`   | A singly linked list to reverse  |

---

##  Algorithm Overview

- Initialize three pointers:
  - `current`: starts at `list.head`
  - `prev`: initially `null`
  - `next`: temporarily stores the next node
- Traverse the list and reverse the `.next` pointer of each node.
- Update `list.head` to point to the new first node (previously the last).

---

##  Example Usage

```js
const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);

console.log("Original list:");
list.printList(); // Output: 10 -> 20 -> 30 -> null

reverse(list);

console.log("Reversed list:");
list.printList(); // Output: 30 -> 20 -> 10 -> null
```

##  Whiteboard Explanation

![Whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data%20Structure/LinkedList/LinkedList-Implementation/images/reverse-function-whiteboard.png)

---
##  Test Results

![Test Results](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data%20Structure/LinkedList/LinkedList-Implementation/images/reverse-console-jest.png)


# 🔗 Merge Two Sorted Linked Lists

> A simple implementation to merge two sorted singly linked lists into one sorted linked list.

---

##  Description

This project contains a function `mergerSortedList(list1, list2)` that merges **two sorted singly linked lists** into a single sorted linked list using an algorithm inspired by the **merge step in Merge Sort**.

The function returns a new `LinkedList` object containing all merged elements and works efficiently even with edge cases like empty lists or duplicate values.

---

##  Output

- The function returns a **new `LinkedList` object**, not modifying the original lists.
- You can use `.printList()` method to print the merged result.

---

##  Inputs

| Input   | Type           | Description                   |
|---------|----------------|-------------------------------|
| `list1` | `LinkedList`   | A sorted singly linked list   |
| `list2` | `LinkedList`   | A sorted singly linked list   |

---

##  Algorithm Overview

- A **dummy node** is used to simplify linking nodes during merging.
- A pointer (`current`) is used to build the new merged list.
- Nodes from both input lists are compared, and the smaller one is added next in the resulting list.
- After the main loop, any remaining nodes from either list are appended.

---

##  Example Usage

```js
const list1 = new LinkedList();
list1.add(1);
list1.add(3);
list1.add(5);

const list2 = new LinkedList();
list2.add(2);
list2.add(4);
list2.add(6);

const mergedList = mergerSortedList(list1, list2);
mergedList.printList(); 
// Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
```

---

##  Whiteboard Explanation

![Whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data%20Structure/LinkedList/LinkedList-Implementation/images/merge-function-whiteboard.png)

---
##  Test Results

![Test Results](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data%20Structure/LinkedList/LinkedList-Implementation/images/merge-function-jest-output.png)

---
##  Console Output Results

![Console Output Result Results](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data%20Structure/LinkedList/LinkedList-Implementation/images/merge-function-app-console-output.png)


---

# Rotate Left Linked List Function

This project implements a function to rotate a singly linked list to the left by a given number of positions `k`.

---

## Functionality

- Takes a singly linked list and an integer `k`.
- Rotates the list left by `k` positions.
- Handles edge cases such as empty list, single-node list, and values of `k` larger than the list length.
- Performs rotation in-place with O(n) time complexity and O(1) space complexity.

---

## How to Use

1. Import the `LinkedList` class and the `rotateLeft` function.
2. Create a linked list and add nodes.
3. Call `rotateLeft(list, k)` to rotate the list.
4. Use the linked list's methods to display or manipulate the rotated list.

---

## Console  Jest Output

![Console jest Output](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data%20Structure/LinkedList/LinkedList-Implementation/images/rotate-left-jest-output.png)  

---

## Testing with Jest

- Jest tests cover different cases including empty list, single-node list, rotation by zero, rotation by `k > length`.
- To run tests:
  ```bash
  npm test
  ```

## Console App Output

![Console app Output](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data%20Structure/LinkedList/LinkedList-Implementation/images/Rotate-left-app-console-output.png)  

---

## Whiteboard

![Whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data%20Structure/LinkedList/LinkedList-Implementation/images/rotate-left-whiteboard.png)  

---

# Stack & Queue Implementation

This project contains two classic data structures implemented in JavaScript: **Stack** and **Queue**, along with unit tests using **Jest**.

---

## Stack (LIFO)

A **Stack** is a data structure that follows the Last-In-First-Out principle.  
The last item pushed into the stack is the first one to be removed.

### Implemented Methods:
- `push(data)`: Adds an element to the top of the stack.
- `pop()`: Removes and returns the top element.
- `peek()`: Returns the top element without removing it.
- `isEmpty()`: Returns `true` if the stack is empty.
- `print()`: Displays all elements from top to bottom.

###  Stack Whiteboard
- Whiteboard Explanation:  
  ![Stack Whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/StackAndQueue/stackAndQueue/images/stack-whiteboard.png)

###  Stack Console Output
- Console Output:  
  ![Stack Console](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/StackAndQueue/stackAndQueue/images/Stack-app-output.png)

###  Stack Jest Test Output
- Jest Test Output:  
  ![Stack Jest](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/StackAndQueue/stackAndQueue/images/Stack-jest-console.png)

---

##  Queue (FIFO)

A **Queue** is a data structure that follows the First-In-First-Out principle.  
The first element enqueued is the first one to be dequeued.

###  Implemented Methods:
- `enqueue(data)`: Adds an element to the end of the queue.
- `dequeue()`: Removes and returns the front element.
- `peek()`: Returns the front element without removing it.
- `isEmpty()`: Returns `true` if the queue is empty.
- `print()`: Displays all elements from front to rear.

###  Queue Whiteboard
- Whiteboard Explanation:  
  ![Queue Whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/StackAndQueue/stackAndQueue/images/queue-whiteboard.png)

###  Queue Console Output
- Console Output:  
  ![Queue Console](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/StackAndQueue/stackAndQueue/images/queue-app-output.png)

###  Queue Jest Test Output
- Jest Test Output:  
  ![Queue Jest](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/StackAndQueue/stackAndQueue/images/queue-jest-console.png)

---

## Testing with Jest

All functions for both Stack and Queue have been tested using the **Jest** testing framework.  
Tests include both normal use cases and edge cases for each method.

To run the tests:
```bash
npm install
npm test
```
# Stack with Delete Middle Operation

This project extends a basic `Stack` class by adding a method to **delete the middle element** from the stack. The middle is defined as:

- `length / 2 - 1` when the number of elements is even.
- `Math.floor(length / 2)` when the number of elements is odd.


## 🧠 Logic Behind `deleteMiddle()`

1. Count total elements in the stack.
2. Determine the index of the middle element.
3. Pop elements one by one and skip pushing the middle element into a temporary stack.
4. Push elements back from the temporary stack to the original stack (to preserve order).

## 📸 Visual Explanation

### Stack Before `deleteMiddle()`

<!-- Replace with your Whiteboard drawing link -->
![Whiteboard Explanation](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/Delete-Middle-Element-Stack/Data-Structure/StackAndQueue/stackAndQueue/images/deleteMiddleElement-whiteboard.png)

### Stack After `deleteMiddle()`

<!-- Replace with your Gist visualization link -->
![Gist Visualization](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/Delete-Middle-Element-Stack/Data-Structure/StackAndQueue/stackAndQueue/images/deleteMiddleElement-jest.png)

## 🧪 Example

If the stack contains:

Top → 5 → 4 → 3 → 2 → 1

After calling `.deleteMiddle()`, the stack will become:

Top → 5 → 4 → 2 → 1 (3 was removed)

## ✅ Edge Cases Handled

- If the stack is empty → nothing happens.
- If the stack has only 1 element → it becomes empty.


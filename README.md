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

![Whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/LinkedList/LinkedList-Implementation/images/reverse-function-whiteboard.png)

---
##  Test Results

![Test Results](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/LinkedList/LinkedList-Implementation/images/reverse-console-jest.png)

---
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

![Whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/LinkedList/LinkedList-Implementation/images/merge-function-whiteboard.png)

---
##  Test Results

![Test Results](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/LinkedList/LinkedList-Implementation/images/merge-function-jest-output.png)

---
##  Console Output Results

![Console Output Result Results](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/LinkedList/LinkedList-Implementation/images/merge-function-app-console-output.png)


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

![Console jest Output](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/LinkedList/LinkedList-Implementation/images/rotate-left-jest-output.png)  

---

## Testing with Jest

- Jest tests cover different cases including empty list, single-node list, rotation by zero, rotation by `k > length`.
- To run tests:
  ```bash
  npm test
  ```

## Console App Output

![Console app Output](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/LinkedList/LinkedList-Implementation/images/Rotate-left-app-console-output.png)  

---

## Whiteboard

![Whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/LinkedList/LinkedList-Implementation/images/rotate-left-whiteboard.png)  

---

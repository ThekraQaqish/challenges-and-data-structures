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

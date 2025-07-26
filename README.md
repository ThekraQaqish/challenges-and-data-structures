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

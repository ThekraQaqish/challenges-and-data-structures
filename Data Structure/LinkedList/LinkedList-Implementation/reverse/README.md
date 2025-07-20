# Reverse a Singly Linked List

This project implements a function that reverses a singly linked list in-place.

---

##  Function Purpose

The `reverse(list)` function is designed to reverse the order of nodes in a singly linked list.  
It handles edge cases like an empty list or a list with only one node.

---

##  How it Works

- Starts from the head of the list.
- Iteratively updates the `.next` pointer of each node to point to the previous one.
- Once all nodes are processed, the head is updated to the last node (now the new head).

---

##  Test Results

![Test Results](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data%20Structure/LinkedList/LinkedList-Implementation/images/reverse-console-jest.png)

---

##  Whiteboard Explanation

![Whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data%20Structure/LinkedList/LinkedList-Implementation/images/reverse-function-whiteboard.png)

---

##  Notes

- The reversal is performed in-place with **O(n)** time complexity and **O(1)** space complexity not **O(n)**.
- It's a fundamental problem that strengthens understanding of pointers and linked list structure.

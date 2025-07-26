# MinStack

## Overview
This project implements a custom `MinStack` class that extends a basic `Stack` structure. It supports common stack operations (`push`, `pop`, `peek`) along with retrieving the minimum value in constant time using an auxiliary stack.


---

## 🧪 Features

- `push(value)` – Pushes value onto the stack.
- `pop()` – Removes and returns the top node.
- `peek()` – Returns the value at the top of the stack.
- `getMin()` – Returns the minimum value in the stack in **O(1)** time.

---

## 📷 Visuals

### Whiteboard Diagram
![Whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/StackAndQueue/stackAndQueue/images/MinStack-WhiteBoard.png)

---

### Console Output Example
![Console Output](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/StackAndQueue/stackAndQueue/images/MinStack-Jest-Console.png)

---

## 🧪 Testing

- Tests are written using **Jest**.
- Each class (`Node`, `Stack`, `MinStack`) has its own dedicated test suite.

To run only MinStack tests:
npx jest tests/minstack.test.js

---

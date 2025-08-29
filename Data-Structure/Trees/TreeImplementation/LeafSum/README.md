# Leaf Sum in Binary Tree 🌳

## Problem Domain
The goal is to calculate the **sum of all leaf nodes** in a **binary tree**.  
A **leaf node** is a node that has **no left and no right child**.

---

## Input / Output

- **Input:**  
  - `root`: the root node of a binary tree (`null` if the tree is empty).  
  - Each node has:
    ```js
    node.value  // number
    node.left   // left child or null
    node.right  // right child or null
    ```
- **Output:**  
  - A number representing the sum of all leaf node values.  
  - Returns `0` if the tree is empty.

---

## Example
### Tree Structure:
    20
   /  \
 30    30
/  \   / \


### Leaf nodes: `20, 15, 7, 13`  
**Sum = 20 + 15 + 7 + 13 = 55**

---

## Algorithm (Iterative DFS)

1. If root is `null`, return `0`.
2. Initialize a **stack** with the root node and `sum = 0`.
3. While the stack is not empty:
   - Pop a node from the stack.
   - If the node is a **leaf**, add its value to `sum`.
   - Otherwise, push its children onto the stack (right first, then left).
4. Continue until the stack is empty.
5. Return `sum`.

> Using a stack ensures iterative DFS, safe for very deep trees.

---

## Time & Space Complexity
- **Time Complexity:** `O(n)` → each node visited once.  
- **Space Complexity:** `O(h)` → stack size, where `h` = height of the tree.  
  - Worst case (skewed tree): `O(n)`  
  - Best case (balanced tree): `O(log n)`

---

## Edge Cases Handled
- Empty tree → returns `0`.  
- Single node (root is leaf) → returns root value.  
- Left-skewed tree → works correctly.  
- Right-skewed tree → works correctly.  
- Balanced tree → sums all leaves correctly.  
- Negative values → included in sum.  
- Large trees → iterative approach avoids stack overflow.

---

## Files
- `leafSum.js` → function implementation.  
- `LeafSum.test.js` → test cases for all edge cases (Jest).  
- `app.js` → example usage + console output.

---

## Whiteboard Visualization
![Whiteboard Diagram](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/Trees/TreeImplementation/LeafSum/images/WhiteBoard.png)

---

## Console Output (Tests & App Run)
![Console Output](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/Trees/TreeImplementation/LeafSum/images/consoleAndTestOutput.png)

---

## How to Run

1. **Install dependencies**:
```bash
npm install

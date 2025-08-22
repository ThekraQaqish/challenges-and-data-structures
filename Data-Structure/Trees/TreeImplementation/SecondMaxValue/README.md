# Second Largest in Binary Tree  

This project implements a function **`SecondMax`** that finds the **second largest distinct value** in a Binary Tree.  

The algorithm traverses the entire tree and keeps track of the largest and second largest values dynamically.  
It works even if the tree contains duplicates, but returns `-Infinity` if no valid second largest value exists (e.g., empty tree, single node, or all nodes equal).  

---

## 📋 How It Works  

- Traverse the tree using DFS.  
- Keep two variables:  
  - `first`: the current largest value.  
  - `second`: the current second largest distinct value.  
- Update them as nodes are visited.  
- Return `second` at the end.  

---



## 📷 Whiteboard

![Whiteboard](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/Trees/TreeImplementation/SecondMaxValue/images/secondMaxWhiteBoard.png) 

---

## 🧾 Tests & Console Output

![Tests Output](https://github.com/ThekraQaqish/challenges-and-data-structures/blob/main/Data-Structure/Trees/TreeImplementation/SecondMaxValue/images/secondMaxTests%26consoleOutput.png)


---


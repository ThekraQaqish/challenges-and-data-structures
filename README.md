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

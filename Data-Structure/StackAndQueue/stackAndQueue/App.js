const stack= require('./stack');
const queue= require('./queue');
const Node = require('./nodeclass');

console.log("=== Testing Stack===");

const stack1 = new stack();
//push()
console.log("=== Testing push() ===");
stack1.push(10);
stack1.print(); // stack: Top -> 10 -> Bottom - null
stack1.push(20);
stack1.print(); // stack: Top -> 20 -> 10 -> Bottom - null
stack1.push(30);
stack1.print(); // stack: Top -> 30 -> 20 -> 10 -> Bottom - null

//print()
console.log("\n=== Testing print() ===");
stack1.print(); // stack: Top -> 30 -> 20 -> 10 -> Bottom - null


//pop()
console.log("\n=== Testing pop() ===");
console.log(stack1.pop()); //pop 30

//peek()
console.log("\n=== Testing peek() ===");
console.log(stack1.peek());// peek 20

console.log("\n=== Testing isEmpty() ===");
console.log(stack1.isEmpty()); // false

stack1.print(); // stack: Top  -> 20 -> 10 -> Bottom - null

stack1.pop();//pop 20
stack1.print(); // stack: Top  -> 10 -> Bottom - null
console.log(stack1.peek());// peek 10
stack1.pop();//pop 10
stack1.print();// stack: Top  -> Bottom - null
console.log(stack1.peek());// peek null
console.log(stack1.isEmpty()); // True


console.log("=== Testing Queue===");
const queue1 = new queue();
//enqueue()
console.log("=== Testing enqueue() ===");
queue1.enqueue(10);
queue1.print(); // queue: front -> 10 -> tail - null
queue1.enqueue(20);
queue1.print(); // queue: front -> 10 -> 20 -> tail - null
queue1.enqueue(30);
queue1.print(); // queue: front -> 10 -> 20 -> 30 -> tail - null

//print()
console.log("\n=== Testing print() ===");
queue1.print(); // queue: front -> 10 -> 20 -> 30 -> tail - null

//pop()
console.log("\n=== Testing dequeue() ===");
console.log(queue1.dequeue()); //dequeue 10
queue1.print(); // queue: front -> 20 -> 30 -> tail - null

//peek()
console.log("\n=== Testing peek() ===");
console.log(queue1.peek());// peek 20

console.log("\n=== Testing isEmpty() ===");
console.log(queue1.isEmpty()); // false

queue1.print(); // queue: front -> 20 -> 30 -> tail - null
queue1.dequeue();//dequeue 20
queue1.print(); // queue: front -> 30 -> tail - null
console.log(queue1.peek());// peek 30
queue1.dequeue();//dequeue 30
queue1.print();// queue: front -> tail - null
console.log(queue1.peek());// peek null
console.log(queue1.isEmpty()); // True






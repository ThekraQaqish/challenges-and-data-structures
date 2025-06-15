const LinkedList = require('./LinkedList');

const list = new LinkedList();

//add()
console.log("=== Testing add() ===");
list.add(10);
list.add(20);
list.add(30);
list.printList(); // 10 -> 20 -> 30 -> null



//printList()
console.log("\n=== Testing printList() ===");
list.printList(); //The current List


//remove()
console.log("\n=== Testing remove() ===");
list.remove(20); //remove 20
list.printList(); // 10 -> 30 -> null

list.remove(10); // rempve head
list.printList(); // 30 -> null

list.remove(100); //delete value not in the list
// The data 100 not found in the list

// includes()
console.log("\n=== Testing includes() ===");
console.log("Includes 30? ", list.includes(30)); // true
console.log("Includes 10? ", list.includes(10)); // false

// insertAt()
console.log("\n=== Testing insertAt() ===");
list.add(40); // adding 40
list.insertAt(25, 1); // insert 25 in the "1" index
list.printList(); // 40 -> 25 -> 30 -> null

list.insertAt(50, 0); // insert 50 in the first index
list.printList(); // 50 -> 40 -> 25 -> 30 -> null

list.insertAt(100, 5); // index > list.length
// Index out of bounds

// اختبار خاصية size
console.log("\n=== Testing size property ===");
console.log("Current size of the list:", list.size); // يجب أن تكون 4
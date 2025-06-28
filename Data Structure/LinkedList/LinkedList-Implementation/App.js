const LinkedList = require('./LinkedList');
const Node = require('./nodeclass');
const mergerSortedList = require('./MergeSorted/mergeSorted');

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




// merge 2 sorted linkedlist 
const list1 = new LinkedList();
list1.add(1);
list1.add(3);
list1.add(4);

const list2 = new LinkedList();
list2.add(2);
list2.add(4);
list2.add(6);

console.log("=== list1 ===");
list1.printList(); // 1 -> 3 -> 5 -> null

console.log("=== list2 ===");
list2.printList(); // 2 -> 4 -> 6 -> null

const mergedList = mergerSortedList(list1, list2);

console.log("=== Merged List ===");
if (mergedList && mergedList.printList) {
    mergedList.printList(); // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
} else {
    console.log("Merged list is empty or not a LinkedList object.");
}
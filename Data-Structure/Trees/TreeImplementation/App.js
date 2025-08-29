const BinaryTree = require('./BinaryTree.js');
const BST = require('./BST.js');
const SecondMax = require('./SecondMaxValue/SecondMax.js');


console.log("=== Binary Tree Example ===");

const bt = new BinaryTree(1);
bt.Add(2);
bt.Add(3);
bt.Add(4);
bt.Add(5);

bt.Print(); // PreOrder, InOrder, PostOrder

console.log("\n=== BST Example ===");

const bst = new BST(10);
bst.Add(5);
bst.Add(15);
bst.Add(3);
bst.Add(7);
bst.Add(12);
bst.Add(20);

console.log("Contains 7:", bst.Contains(7)); // true
console.log("Contains 8:", bst.Contains(8)); // false

console.log("Before Remove 15:");
console.log("PreOrder:", bst.Add(15));

bst.Remove(15);

console.log("After Remove 15:");
function printBSTPreOrder(node, result = []) {
    if (!node) return result;
    result.push(node.value);
    printBSTPreOrder(node.left, result);
    printBSTPreOrder(node.right, result);
    return result;
}

console.log("PreOrder:", printBSTPreOrder(bst.root));


const bt1 = new BinaryTree(1);
bt1.Add(20);
bt1.Add(30);
bt1.Add(4);
bt1.Add(5);
bt1.Add(30);
bt1.Add(20);
bt1.Add(20);
bt1.Add(30);
bt1.Print();
const btSecond = SecondMax(bt1.root); 
console.log("Second largest in BinaryTree:", btSecond);



const leafSum = require("./LeafSum/LeafSum.js");

// =======================
// Example Trees
// =======================

// Empty tree
console.log("Empty tree:", leafSum(null)); // 0

// Single node
let tree = new BinaryTree(7);
console.log("Single node:", leafSum(tree.root)); // 7

// Balanced tree
tree = new BinaryTree(10);
tree.Add(5);
tree.Add(15);
tree.Add(2);
tree.Add(3);
tree.Add(20);
console.log("Balanced tree:", leafSum(tree.root)); // 25

// Left-skewed tree (manual)
tree = new BinaryTree(1);
tree.root.left = { value: 2, left: null, right: null };
tree.root.left.left = { value: 3, left: null, right: null };
tree.root.left.left.left = { value: 4, left: null, right: null };
console.log("Left-skewed tree:", leafSum(tree.root)); // 4

// Right-skewed tree (manual)
tree = new BinaryTree(1);
tree.root.right = { value: 2, left: null, right: null };
tree.root.right.right = { value: 3, left: null, right: null };
tree.root.right.right.right = { value: 4, left: null, right: null };
console.log("Right-skewed tree:", leafSum(tree.root)); // 4

// Negative values
tree = new BinaryTree(-10);
tree.Add(-5);
tree.Add(-15);
tree.Add(-2);
tree.Add(-3);
console.log("Tree with negatives:", leafSum(tree.root)); // -20

// Zero values
tree = new BinaryTree(0);
tree.Add(0);
tree.Add(0);
tree.Add(0);
tree.Add(5);
console.log("Tree with zeros:", leafSum(tree.root)); // 5

// Large tree
tree = new BinaryTree(1);
let current = tree.root;
for (let i = 2; i <= 10000; i++) {
  current.left = { value: i, left: null, right: null };
  current = current.left;
}
console.log("Large left-skewed tree:", leafSum(tree.root)); // 10000



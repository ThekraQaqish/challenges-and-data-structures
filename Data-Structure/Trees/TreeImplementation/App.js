const BinaryTree = require('./BinaryTree.js');
const BST = require('./BST.js');

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

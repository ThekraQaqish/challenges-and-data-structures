// tests/LeafSum.test.js
const BinaryTree = require("../BinaryTree"); // صحح المسار حسب مكان binaryTree.js
const leafSum = require("../LeafSum/LeafSum"); // صحح المسار حسب مكان leafSum.js

describe("leafSum function edge cases", () => {
  
  test("Empty tree", () => {
    expect(leafSum(null)).toBe(0);
  });

  test("Single node tree", () => {
    const tree = new BinaryTree(7);
    expect(leafSum(tree.root)).toBe(7);
  });

  test("Balanced tree", () => {
    const tree = new BinaryTree(10);
    tree.Add(5);
    tree.Add(15);
    tree.Add(2);
    tree.Add(3);
    tree.Add(20);
    // leaves = 2, 3, 20
    expect(leafSum(tree.root)).toBe(25);
  });

  test("Left-skewed tree (built manually)", () => {
    const tree = new BinaryTree(1);
    tree.root.left = { value: 2, left: null, right: null };
    tree.root.left.left = { value: 3, left: null, right: null };
    tree.root.left.left.left = { value: 4, left: null, right: null };
    // leaf = 4
    expect(leafSum(tree.root)).toBe(4);
  });

  test("Right-skewed tree (built manually)", () => {
    const tree = new BinaryTree(1);
    tree.root.right = { value: 2, left: null, right: null };
    tree.root.right.right = { value: 3, left: null, right: null };
    tree.root.right.right.right = { value: 4, left: null, right: null };
    // leaf = 4
    expect(leafSum(tree.root)).toBe(4);
  });

  test("Tree with negative values", () => {
    const tree = new BinaryTree(-10);
    tree.Add(-5);
    tree.Add(-15);
    tree.Add(-2);
    tree.Add(-3);
    // leaves = -2, -3, -15
    expect(leafSum(tree.root)).toBe(-20);
  });

  test("Tree with zeros", () => {
    const tree = new BinaryTree(0);
    tree.Add(0);
    tree.Add(0);
    tree.Add(0);
    tree.Add(5);
    // leaves = 0, 5
    expect(leafSum(tree.root)).toBe(5);
  });

  test("Large left-skewed tree performance", () => {
    const tree = new BinaryTree(1);
    let current = tree.root;
    for (let i = 2; i <= 10000; i++) {
      current.left = { value: i, left: null, right: null };
      current = current.left;
    }
    // leaf = 10000
    expect(leafSum(tree.root)).toBe(10000);
  });
});

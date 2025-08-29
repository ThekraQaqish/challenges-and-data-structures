const BinaryTree = require('../BinaryTree');
const SecondMax = require('../SecondMaxValue/SecondMax');
test('Second largest in simple BinaryTree', () => {
    const tree = new BinaryTree(10);
    tree.Add(5);
    tree.Add(20);
    tree.Add(15);

    expect(SecondMax(tree.root)).toBe(15); // أكبر = 20, ثاني أكبر = 15
});
test('Second largest distinct with duplicates', () => {
    const tree = new BinaryTree(10);
    tree.Add(20);
    tree.Add(20);
    tree.Add(15);
    tree.Add(15);
    tree.Add(5);

    expect(SecondMax(tree.root)).toBe(15); // أكبر = 20, ثاني أكبر distinct = 15
});
test('Second largest with single node', () => {
    const tree = new BinaryTree(10);

    expect(SecondMax(tree.root)).toBe(-Infinity); 
});
test('Second largest in empty tree', () => {
    const tree = new BinaryTree(); // بدون قيمة
    tree.root = null; // نتأكد انها فارغة

    expect(SecondMax(tree.root)).toBe(-Infinity);
});
test('Second largest when all values are the same', () => {
    const tree = new BinaryTree(10);
    tree.Add(10);
    tree.Add(10);

    expect(SecondMax(tree.root)).toBe(-Infinity);
});
test('Second largest when largest is duplicated', () => {
    const tree = new BinaryTree(20);
    tree.Add(20);
    tree.Add(15);
    tree.Add(15);
    tree.Add(10);

    expect(SecondMax(tree.root)).toBe(15); // أكبر = 20, ثاني أكبر distinct = 15
});
test('Second largest is left child of largest', () => {
    const tree = new BinaryTree(50);
    tree.Add(30);
    tree.Add(70);
    tree.Add(60);

    expect(SecondMax(tree.root)).toBe(60); // أكبر = 70, ثاني أكبر = 60
});
test('Second largest in complex tree with multiple duplicates', () => {
    const tree = new BinaryTree(10);
    tree.Add(20);
    tree.Add(30);
    tree.Add(30);
    tree.Add(15);
    tree.Add(25);
    tree.Add(25);
    tree.Add(5);

    expect(SecondMax(tree.root)).toBe(25); // أكبر = 30, ثاني أكبر distinct = 25
});


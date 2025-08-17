const BinaryTree = require('../BinaryTree.js');

describe('BinaryTree Tests', () => {
    let bt;

    beforeEach(() => {
        bt = new BinaryTree(1);
        bt.Add(2);
        bt.Add(3);
        bt.Add(4);
        bt.Add(5);
    });

    test('PreOrder traversal', () => {
        expect(bt.PreOrder()).toEqual([1,2,4,5,3]);
    });

    test('InOrder traversal', () => {
        expect(bt.InOrder()).toEqual([4,2,5,1,3]);
    });

    test('PostOrder traversal', () => {
        expect(bt.PostOrder()).toEqual([4,5,2,3,1]);
    });

    test('Add new node', () => {
        bt.Add(6);
        const pre = bt.PreOrder();
        expect(pre).toContain(6);
    });
});

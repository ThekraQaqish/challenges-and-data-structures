const BST = require('../BST.js');

describe('BST Tests', () => {
    let bst;

    beforeEach(() => {
        bst = new BST(10);
        bst.Add(5);
        bst.Add(15);
        bst.Add(3);
        bst.Add(7);
        bst.Add(12);
        bst.Add(20);
    });

    test('Contains existing values', () => {
        expect(bst.Contains(7)).toBe(true);
        expect(bst.Contains(12)).toBe(true);
    });

    test('Does not contain non-existing values', () => {
        expect(bst.Contains(8)).toBe(false);
        expect(bst.Contains(25)).toBe(false);
    });

    test('Remove leaf node', () => {
        bst.Remove(3);
        expect(bst.Contains(3)).toBe(false);
    });

    test('Remove node with one child', () => {
        bst.Remove(15); // 15 has children 12 and 20
        expect(bst.Contains(15)).toBe(false);
        expect(bst.Contains(12)).toBe(true);
        expect(bst.Contains(20)).toBe(true);
    });

    test('Remove node with two children', () => {
        bst.Remove(5); // 5 has children 3 and 7
        expect(bst.Contains(5)).toBe(false);
        expect(bst.Contains(3)).toBe(true);
        expect(bst.Contains(7)).toBe(true);
    });
});

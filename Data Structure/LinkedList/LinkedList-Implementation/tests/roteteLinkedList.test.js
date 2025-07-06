const LinkedList = require('../LinkedList');
const rotateLeft = require('../rotateLinkedList/roteteLinkedList');

function toArray(list) {
    const result = [];
    let current = list.head;
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    return result;
}

describe('rotateLeft', () => {
    test('should return the same list if empty or single node or k=0', () => {
        const emptyList = new LinkedList();
        expect(rotateLeft(emptyList, 3)).toBe(emptyList);

        const singleNodeList = new LinkedList();
        singleNodeList.add(1);
        expect(rotateLeft(singleNodeList, 0)).toBe(singleNodeList);
        expect(toArray(rotateLeft(singleNodeList, 0))).toEqual([1]);
    });

    test('should rotate left by k positions', () => {
        const list = new LinkedList();
        [1, 2, 3, 4, 5].forEach(num => list.add(num));

        const rotated = rotateLeft(list, 2);
        expect(toArray(rotated)).toEqual([3, 4, 5, 1, 2]);
    });

    test('should handle k larger than list length', () => {
        const list = new LinkedList();
        [1, 2, 3, 4, 5].forEach(num => list.add(num));

        const rotated = rotateLeft(list, 7); // 7 % 5 = 2
        expect(toArray(rotated)).toEqual([3, 4, 5, 1, 2]);
    });

    test('should rotate entire list when k equals length (result same as original)', () => {
        const list = new LinkedList();
        [1, 2, 3].forEach(num => list.add(num));

        const rotated = rotateLeft(list, 3);
        expect(toArray(rotated)).toEqual([1, 2, 3]);
    });

    test('should rotate left by 1 position', () => {
        const list = new LinkedList();
        [10, 20, 30].forEach(num => list.add(num));

        const rotated = rotateLeft(list, 1);
        expect(toArray(rotated)).toEqual([20, 30, 10]);
    });
});

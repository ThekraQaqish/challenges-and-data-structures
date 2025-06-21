const LinkedList = require('../LinkedList');
const Node = require('../nodeclass');

describe('LinkedList', () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

    test('should add node to the end of the list', () => {
        list.add(10);
        list.add(20);
        expect(list.size).toBe(2);
        expect(list.head.data).toBe(10);
        expect(list.head.next.data).toBe(20);
    });

    test('should print the linked list correctly', () => {
        list.add(5);
        list.add(10);
        list.add(15);

        const consoleLog = console.log;
        let logOutput = '';
        console.log = (msg) => logOutput += msg;

        list.printList();

        console.log = consoleLog; // Restore console

        expect(logOutput).toContain("5 -> 10 -> 15 -> null");
    });

    test('should remove the head node', () => {
        list.add(10);
        list.add(20);
        list.remove(10);
        expect(list.head.data).toBe(20);
        expect(list.size).toBe(1);
    });

    test('should remove a middle node', () => {
        list.add(10);
        list.add(20);
        list.add(30);
        list.remove(20);
        expect(list.head.next.data).toBe(30);
        expect(list.size).toBe(2);
    });

    test('should return false if data is not found', () => {
        list.add(10);
        list.add(20);
        expect(list.includes(15)).toBe(false);
    });

    test('should return true if data is found', () => {
        list.add(10);
        list.add(20);
        expect(list.includes(10)).toBe(true);
    });

    test('should insert at beginning (index 0)', () => {
        list.add(20);
        list.insertAt(10, 0);
        expect(list.head.data).toBe(10);
        expect(list.size).toBe(2);
    });

    test('should insert in the middle', () => {
        list.add(10);
        list.add(30);
        list.insertAt(20, 1);
        expect(list.head.next.data).toBe(20);
        expect(list.size).toBe(3);
    });
});
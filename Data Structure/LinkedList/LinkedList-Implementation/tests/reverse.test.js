const reverse = require('../reverse/reverse');
const LinkedList = require('../LinkedList');

describe('LinkedList Reverse Function', () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
    });

    test('should reverse the linked list with multiple nodes', () => {
        list.add(5);
        list.add(10);
        list.add(15);

        reverse(list);

        expect(list.head.data).toBe(15);
        expect(list.head.next.data).toBe(10);
        expect(list.head.next.next.data).toBe(5);
        expect(list.head.next.next.next).toBe(null);
    });

    test('should handle empty list', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        reverse(list);
        expect(consoleSpy).toHaveBeenCalledWith('the list is empty');
        consoleSpy.mockRestore();
    });

    test('should handle single node list', () => {
        list.add(42);
        reverse(list);
        expect(list.head.data).toBe(42);
        expect(list.head.next).toBe(null);
    });

    test('should print the linked list correctly', () => {
        list.add(5);
        list.add(10);
        list.add(15);

        const consoleLog = console.log;
        let logOutput = '';
        console.log = (msg) => logOutput += msg;

        list.printList();

        console.log = consoleLog; 

        expect(logOutput).toContain("The Final LinkedList is 5 -> 10 -> 15 -> null");
    });
});

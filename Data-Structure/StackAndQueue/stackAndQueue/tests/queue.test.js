const queue = require('../queue');
const Node = require('../nodeclass');

describe('queue', () => {
    let queue1;

    beforeEach(() => {
        queue1 = new queue();
    });

    test('should enqueue a node at the tail of the queue', () => {
        queue1.enqueue(10);
        queue1.enqueue(20);
        queue1.enqueue(30);
        expect(queue1.head.data).toBe(10);
        expect(queue1.tail.data).toBe(30);
    });

    test('should print the queue correctly', () => {
        queue1.enqueue(10);
        queue1.enqueue(20);
        queue1.enqueue(30);

        const consoleLog = console.log;
        let logOutput = '';
        console.log = (msg) => logOutput += msg;

        queue1.print();

        console.log = consoleLog; // Restore console

        expect(logOutput).toContain("Queue: front -> 10 -> 20 -> 30 -> Tail - null");
    });

    test('should dequeue a node from the front of the queue', () => {
        queue1.enqueue(10);
        queue1.enqueue(20);
        queue1.enqueue(30);
        queue1.dequeue();
        expect(queue1.dequeue()).toBe(20);
    });


    test('should return false if queue is empty', () => {
        queue1.enqueue(10);
        queue1.enqueue(20);
        queue1.enqueue(30);
        expect(queue1.isEmpty()).toBe(false);
    });

    test('should return true if queue is empty', () => {
        queue1.enqueue(10);
        queue1.enqueue(20);
        queue1.dequeue();
        queue1.dequeue();
        expect(queue1.isEmpty()).toBe(true);
    });

    test('should return the head node of the queue', () => {
        queue1.enqueue(10);
        queue1.enqueue(20); 
        expect(queue1.peek()).toBe(10);
    });

    test('should clear the queue', () => {
    queue1.enqueue(10);
    queue1.enqueue(20);
    queue1.clear();
    expect(queue1.isEmpty()).toBe(true);
});
});
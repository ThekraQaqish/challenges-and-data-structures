const stack = require('../stack');

describe('stack', () => {
    let stack1;

    beforeEach(() => {
        stack1 = new stack();
    });

    test('should push node at the front of the stack', () => {
        stack1.push(10);
        stack1.push(20);
        stack1.push(30);
        expect(stack1.top.data).toBe(30);
    });

    test('should print the stack correctly', () => {
        stack1.push(10);
        stack1.push(20);
        stack1.push(30);

        const result = stack1.print();
        expect(result).toBe("Top -> 30 -> 20 -> 10 -> null");
    });

    test('should pop the top node', () => {
        stack1.push(10);
        stack1.push(20);
        stack1.push(30);
        stack1.pop();
        expect(stack1.pop()).toBe(20);
    });


    test('should return false if stack is empty', () => {
        stack1.push(10);
        stack1.push(20);
        stack1.push(30);
        expect(stack1.isEmpty()).toBe('isEmpty: false');
    });

    test('should return true if stack is empty', () => {
        stack1.push(10);
        stack1.push(20);
        stack1.pop();
        stack1.pop();
        expect(stack1.isEmpty()).toBe('isEmpty: true');
    });

    test('should return the top node of the stack', () => {
        stack1.push(10);
        stack1.push(20); 
        expect(stack1.peek()).toBe(20);
    });

    test('should clear the stack', () => {
    stack1.push(10);
    stack1.push(20);
    stack1.clear();
    expect(stack1.isEmpty()).toBe('isEmpty: true');
});
});
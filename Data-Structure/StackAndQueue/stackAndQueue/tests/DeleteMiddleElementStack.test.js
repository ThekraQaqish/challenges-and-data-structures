const StackWithDeleteMiddle = require('../deleteMiddleElement/deleteMiddlaeElement');

describe('deleteMiddle', () => {
  test('should delete the middle element for odd-sized stack', () => {
    const stack = new StackWithDeleteMiddle();
    [1, 2, 3, 4, 5].forEach(num => stack.push(num)); // Stack: 5 (top), 4, 3, 2, 1
    stack.deleteMiddle(); // Should delete 3
    const result = [];
    while (stack.isEmpty()==='isEmpty: false') {
      result.push(stack.pop());
    }
    expect(result).toEqual([5, 4, 2, 1]);
  });

  test('should delete the left-middle element for even-sized stack', () => {
    const stack = new StackWithDeleteMiddle();
    [1, 2, 3, 4].forEach(num => stack.push(num)); // Stack: 4 (top), 3, 2, 1
    stack.deleteMiddle(); // Should delete 2 (index 1)
    const result = [];
    while (stack.isEmpty()==='isEmpty: false') {
      result.push(stack.pop());
    }
    expect(result).toEqual([4, 3, 1]);
  });

  test('should handle empty stack', () => {
    const stack = new StackWithDeleteMiddle();
    stack.deleteMiddle();
    expect(stack.isEmpty()).toBe('isEmpty: true');
  });

  test('should handle stack with one element', () => {
    const stack = new StackWithDeleteMiddle();
    stack.push(1);
    stack.deleteMiddle(); // Should remove the only element
    expect(stack.isEmpty()).toBe('isEmpty: true');
  });

  test('should handle stack with two elements', () => {
    const stack = new StackWithDeleteMiddle();
    stack.push(1);
    stack.push(2); // Stack: 2 (top), 1
    stack.deleteMiddle(); // Should remove index 0 → element 1
    const result = [];
    while (stack.isEmpty()==='isEmpty: false') {
      result.push(stack.pop());
    }
    expect(result).toEqual([2]);
  });
});

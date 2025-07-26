const MinStackClass =  require('../MinStack/MinStack');

describe('Min Stack',()=>{
    let MinStack;
    function fillStack(values) {
    values.forEach(v => MinStack.push(v));
    }


    beforeEach(() => {
        MinStack = new MinStackClass();
    });
    test('should push 15 and return it as a minimum value',()=>{
        fillStack([15]);
    expect(MinStack.getMin()).toBe('min: 15');
    });

    test('should add 7 and will 7 became the minimum value',()=>{
        fillStack([15, 7]);
    expect(MinStack.getMin()).toBe('min: 7');
    });

    test('should push 12 and 7 still the minimum',()=>{
        fillStack([15, 7, 12]);
    expect(MinStack.getMin()).toBe('min: 7');
    });

    test('should push 3 and 3 became the minimum',()=>{
        fillStack([15, 7, 12, 3]);
    expect(MinStack.getMin()).toBe('min: 3');
    });

    test('should print the stack correctly',()=>{
        fillStack([15, 7, 12, 3]);
    expect(MinStack.print()).toBe('Top -> 3 -> 12 -> 7 -> 15 -> null');
    });

    test('should pop the topped value and print the stack',()=>{
       fillStack([15, 7, 12, 3]);
        MinStack.pop();
    expect(MinStack.print()).toBe('Top -> 12 -> 7 -> 15 -> null');
    });

    test('should return the 7 as minimum after pop 3',()=>{
       fillStack([15, 7, 12]);
    expect(MinStack.getMin()).toBe('min: 7');
    });

    test('should return the top value 12',()=>{
        fillStack([15, 7, 12]);
    expect(MinStack.topFun()).toBe('peeked: 12');
    });

    test('should push 2 and print the stack correctly',()=>{
       fillStack([15, 7, 12, 2]);
    expect(MinStack.print()).toBe('Top -> 2 -> 12 -> 7 -> 15 -> null');
    });

    test('should return 2 as a minimum value',()=>{
        fillStack([15, 7, 12, 2]);
    expect(MinStack.getMin()).toBe('min: 2');
    });

    test('should return the stack isEmpty = false',()=>{
       fillStack([15, 7, 12, 2]);
    expect(MinStack.isEmpty()).toBe('isEmpty: false');
    });
})
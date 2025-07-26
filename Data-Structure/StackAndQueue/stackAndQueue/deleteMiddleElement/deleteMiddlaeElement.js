const Stack = require('../stack');
class stackWithDeleteMiddle extends Stack {

    deleteMiddle() {
        let length = 0;
        let current = this.top;
        while (current) {
            length++;
            current = current.next;
        }

        const middle = Math.floor(length / 2);

        const tempStack = new Stack();

        for (let i = 0; i < length; i++) {
            let val = this.pop();
            if (i !== middle) {
                tempStack.push(val);
            }
        }

        while (tempStack.isEmpty()==="isEmpty: false") {
            this.push(tempStack.pop());
        }

        return this;
    }

}

module.exports=stackWithDeleteMiddle;
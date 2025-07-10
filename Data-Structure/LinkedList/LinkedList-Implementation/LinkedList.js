const Node = require("./nodeclass");

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.size++;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
        this.size++;
    }

    printList() {
        let current = this.head;
        if (current === null) {
            console.log("The LinkedList is empty");
            return;
        }

        let result = "";
        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }
        result += "null";
        console.log(`The Final LinkedList is ${result}`);
    }

    remove(data) {
        if (this.head === null) {
            console.log("The linkedList is empty, cannot remove anything");
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                this.size--;
                return;
            }
            current = current.next;
        }

        console.log(`The data ${data} not found in the list`);
    }

    includes(data) {
        if (this.head === null) {
            console.log("The linkedList is empty");
            return false;
        }

        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    insertAt(data, index) {
        if (this.head === null) {
            console.log("The linkedList is empty");
            return;
        }

        if (index < 0 || index > this.size) {
            console.log("Index out of bounds");
            return;
        }

        const newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
            return;
        }

        let current = this.head;
        let count = 0;

        while (count < index - 1) {
            current = current.next;
            count++;
        }

        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }
}

module.exports = LinkedList;
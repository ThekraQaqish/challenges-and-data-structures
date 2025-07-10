const LinkedList = require("../LinkedList");
const Node = require("../nodeclass");

function mergerSortedList(list1, list2) {
    let head1 = list1.head;
    let head2 = list2.head;

    if (!head1 && !head2) {
        console.log("Both of lists is empty");
        return null;
    }

    const dummy = new Node(-1);
    let current = dummy;

    while (head1 && head2) {
        if (head1.data <= head2.data) {
            current.next = head1;
            head1 = head1.next;
        } else {
            current.next = head2;
            head2 = head2.next;
        }
        current = current.next;
    }

    current.next = head1 || head2;

    const mergedList = new LinkedList();
    mergedList.head = dummy.next;

    return mergedList;
}

module.exports = mergerSortedList;
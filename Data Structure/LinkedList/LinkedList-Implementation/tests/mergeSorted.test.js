const LinkedList = require('../LinkedList');
const mergerSortedList = require('../MergeSorted/mergeSorted');

describe("mergerSortedList", () => {
    function convertToArray(head) {
        const result = [];
        let current = head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    test("دمج قائمتين غير فارغتين", () => {
        // قائمة 1: 1 -> 3 -> 5
        const list1 = new LinkedList();
        list1.add(1);
        list1.add(3);
        list1.add(5);

        // قائمة 2: 2 -> 4 -> 6
        const list2 = new LinkedList();
        list2.add(2);
        list2.add(4);
        list2.add(6);

        const mergedList = mergerSortedList(list1, list2);
        expect(convertToArray(mergedList.head)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("قائمة أولى فقط تحتوي بيانات", () => {
        const list1 = new LinkedList();
        list1.add(10);
        list1.add(20);

        const list2 = new LinkedList(); // فارغة

        const mergedList = mergerSortedList(list1, list2);
        expect(convertToArray(mergedList.head)).toEqual([10, 20]);
    });

    test("قائمة ثانية فقط تحتوي بيانات", () => {
        const list1 = new LinkedList(); // فارغة

        const list2 = new LinkedList();
        list2.add(5);
        list2.add(15);

        const mergedList = mergerSortedList(list1, list2);
        expect(convertToArray(mergedList.head)).toEqual([5, 15]);
    });

    test("كلتا القائمتين فارغتين", () => {
        const list1 = new LinkedList();
        const list2 = new LinkedList();

        const mergedList = mergerSortedList(list1, list2);
        expect(mergedList).toBeNull(); // لأن الدالة تُرجع null إذا كانت القائمتين فارغتين
    });

    test("قائمة واحدة عنصر واحد", () => {
        const list1 = new LinkedList();
        list1.add(1);

        const list2 = new LinkedList();
        list2.add(2);

        const mergedList = mergerSortedList(list1, list2);
        expect(convertToArray(mergedList.head)).toEqual([1, 2]);
    });

    test("قوائم متكررة", () => {
        const list1 = new LinkedList();
        list1.add(2);
        list1.add(2);
        list1.add(2);

        const list2 = new LinkedList();
        list2.add(2);
        list2.add(2);

        const mergedList = mergerSortedList(list1, list2);
        expect(convertToArray(mergedList.head)).toEqual([2, 2, 2, 2, 2]);
    });
});
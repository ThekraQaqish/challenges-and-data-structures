const list = require("../LinkedList");

function rotateLeft(list, k) {
    if (!list.head || !list.head.next || k === 0) return list;
   let current =list.head;
   let length = 0;
   while(current){
    current=current.next;
    length++;
   }
   k = k % length;
   if(k===0 || length === k) return list;
  current=list.head;
  let count=1;
  while(count<k){
    current=current.next;
    count++;
   }
   let newHead=current.next;
   current.next=null;
   let temp = newHead;
   while(temp.next){
    temp=temp.next;
   }
   temp.next=list.head;
   list.head=newHead;
   return list;
}

module.exports = rotateLeft;
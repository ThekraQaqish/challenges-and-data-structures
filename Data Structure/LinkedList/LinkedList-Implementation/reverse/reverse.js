const list = require("../LinkedList");

function reverse(list){
    if(!list.head){
        console.log('the list is empty');
        return null ;
    }
    let current=list.head;
    let prev=null;
    if(!current.next){
        return;
    }
    while(current){
        let next= current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    list.head = prev;
}
module.exports = reverse;
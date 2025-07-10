const node= require('./nodeclass');

class Queue {
    constructor(){
        this.tail=null;
        this.head=null;
    }

    enqueue(data){
        const newNode= new node(data);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
    }
    dequeue(){
        if(!this.head) return null;
        const removed=this.head;
        this.head=this.head.next;
        if (!this.head) {
            this.tail = null;  // لأنه صار فاضي
        }
        return removed.data;
    }
    peek(){
        if(this.head){
            return this.head.data;
        }
        else{
            return null;
        }
    }
    isEmpty(){
        if(this.head){
            return false;
        }
        else{
            return true;
        }
    }

    print(){
        let current = this.head;
        let result ='Queue: front -> ';
        while(current){
            result+=current.data+' -> ';
            current=current.next;
        }
        console.log( result + 'Tail - null');
    }
    clear(){
        this.head=null;
        this.tail=null;
    }
}
module.exports=Queue;
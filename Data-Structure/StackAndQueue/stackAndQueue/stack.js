const node= require('./nodeclass');

class Stack{
    constructor(){
        this.top=null;
    }

    push(data){
        const newNode= new node(data);
        newNode.next=this.top;
        this.top=newNode;
    }
    pop(){
        if(!this.top) return null;
        const poped=this.top;
        this.top=this.top.next;
        return poped.data;
    }
    peek(){
        if(this.top){
            return this.top.data;
        }
        else{
            return null;
        }
    }
    isEmpty(){
        if(this.top){
            return `isEmpty: ${false}`;
        }
        else{
            return `isEmpty: ${true}`;
        }
    }

    print(){
        let current = this.top;
        let result ='Top -> ';
        while(current){
            result+=current.data+' -> ';
            current=current.next;
        }
        return( result + 'null');
    }
    clear(){
        this.top=null;
    }
}
module.exports=Stack;
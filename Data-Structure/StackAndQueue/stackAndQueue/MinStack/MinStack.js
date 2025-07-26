const Stack = require('../stack');
class MinStack extends Stack{
    constructor(){
        super();
        this.Min=new Stack();
    }
    push(value){
        if(this.Min.isEmpty()==='isEmpty: true' || value<=this.Min.top.data ){
            super.push(value);
            this.Min.push(value);
        }
        else{
            super.push(value);
            this.Min.push(this.Min.top.data);
        }
    }
    pop(){
        if(this.isEmpty()==='isEmpty: true') {
        return null;
        }
        super.pop();
        if(this.Min.isEmpty==='isEmpty: false') {
            this.Min.pop();
        }
    }
    topFun(){
        if(this.isEmpty()==='isEmpty: true'){
        return null;
        }
        return `peeked: ${super.peek()}`;
        }
    getMin(){
        if(this.Min.isEmpty()==='isEmpty: true'){
            return null;
        }
        return `min: ${this.Min.top.data}`;
        }
}
module.exports=MinStack;
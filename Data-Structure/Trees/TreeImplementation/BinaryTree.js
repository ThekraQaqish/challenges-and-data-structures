const TNode = require("./TNode");

class BinaryTree{
    constructor(value){
        this.root=new TNode(value);
    }

    Add(value){
        const newNode = new TNode(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        // نستخدم queue للبحث level-order
        const queue = [this.root];

        while(queue.length > 0){
            const current = queue.shift();

            if (!current.left) {
                current.left = newNode;
                return;
            } else {
                queue.push(current.left);
            }

            if (!current.right) {
                current.right = newNode;
                return;
            } else {
                queue.push(current.right);
            }
        }
    }
    // Root =>  left => right
    PreOrder(){
        let result=[];
        let current=this.root;
        function traverse(current){
            if(!current) return;
            result.push(current.value);
            traverse(current.left);
            traverse(current.right);
        }
        traverse(current);
        return result;
        }    

    //Left =>  Root => right
    InOrder(){
        let result=[];
        let current=this.root;
        function traverse(current){
            if(!current) return;
            traverse(current.left);
            result.push(current.value);
            traverse(current.right);
        }
        traverse(current);
        return result;
}

    //Left => right => Root
    PostOrder(){
        let result=[];
        let current=this.root;
        function traverse(current){
            if(!current) return;
            traverse(current.left);
            traverse(current.right);
            result.push(current.value);
        }
        traverse(current);
        return result;
    }

    Print(){
        console.log('PreOrder : ',this.PreOrder())
        console.log('InOrder : ',this.InOrder())
        console.log('PostOrder : ',this.PostOrder())
    }

}

module.exports=BinaryTree;
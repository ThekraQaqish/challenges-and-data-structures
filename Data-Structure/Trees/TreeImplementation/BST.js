const TNode=require('./TNode.js');
class BST{
    constructor(value){
        this.root=new TNode(value);
    }
    //Recursive Approach
    Add(value){
        let current=this.root;
        function insert(value,current){
            if(value<current.value){
                if(!current.left){
                    current.left= new TNode(value);
                }else{
                    insert(value,current.left);
                }
            }else if(value > current.value){
                if(!current.right){
                    current.right=new TNode(value);
                }
                else{
                    insert(value,current.right);
                }
            }
            else{
                return;
            }
        }
        insert(value,this.root);
    }
    //Iterative Approach
    Contains(value){
        let current = this.root;
        while(current){
            if (current.value === value) {
            return true;
            }
            else if(value<current.value){
                current=current.left;
            }
            else {
                current=current.right;
            }
        }
        return false;
    }

    
    Remove(value) {
    let current = this.root;
    let parent = null;

    while (current) {
        if (value < current.value) {
            parent = current;
            current = current.left;
        } else if (value > current.value) {
            parent = current;
            current = current.right;
        } else {
            // Found the node to remove

            // Case 1: Leaf node
            if (!current.left && !current.right) {
                if (!parent) {
                    this.root = null; // root itself is leaf
                } else if (parent.left === current) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
            }
            // Case 2: Node with one child
            else if (!current.left || !current.right) {
                let child = current.left ? current.left : current.right;
                if (!parent) {
                    this.root = child; // root has one child
                } else if (parent.left === current) {
                    parent.left = child;
                } else {
                    parent.right = child;
                }
            }
            // Case 3: Node with two children
            else {
                // Find in-order successor (smallest in right subtree)
                let successorParent = current;
                let successor = current.right;
                while (successor.left) {
                    successorParent = successor;
                    successor = successor.left;
                }

                // Replace current value with successor value
                current.value = successor.value;

                // Delete successor node
                if (successorParent.left === successor) {
                    successorParent.left = successor.right ? successor.right : null;
                } else {
                    successorParent.right = successor.right ? successor.right : null;
                }
            }

            return; // node removed
        }
    }
}

}
module.exports=BST;
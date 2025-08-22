const BinaryTree = require("../BinaryTree");
const tree= new BinaryTree;
function SecondMax(root){
    let first=-Infinity;
    let second=-Infinity;
    function traverse(root){
        if(root==null){
            return;
        }
        let current= root.value;
        if(current>first){
            second=first;
            first=current;
        }
        else if( current <first &&current>second){
            second=current;
        }
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root);
    return second;
}
module.exports = SecondMax;



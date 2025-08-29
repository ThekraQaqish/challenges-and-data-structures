function leafSum(root) {
  if (!root) return 0;
  let sum = 0;
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node.left && !node.right) {
      sum += node.value;
    }
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return sum;
}
module.exports = leafSum;

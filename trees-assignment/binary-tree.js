/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(current = this.root, path = 0) {
      if (this.root === null) return path;
      
      if(current.left === null || current.right == null) return path+1;

      if(current.left !== null || current.right !== null) { 
        path = path + 1;

        if(current.left !== null) return this.minDepth(current = current.left, path = path);
        if(current.right !== null) return this.minDepth(current = current.right, path = path);
      
      }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

   maxDepth() {
    let leftPath = 0;
    let rightPath = 0;
      function helper(node){

        if(node.left !== null){
          leftPath = leftPath+1
          helper(node.left);
        }
        
        if(node.right !== null){
          rightPath = rightPath+1
          helper(node.right);
        }
        
        if(node.left === null && node.right == null) return;

      }
   
      helper(this.root);
      return Math.max(leftPath+1,rightPath+1);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    
    let result = 0;

      function helper(node){
        
        if(node === null) return 0;

        let leftSum = helper(node.left);
        let rightSum = helper(node.right);

        result = Math.max(result, node.val+leftSum, node.val+rightSum);
      
        return Math.max(0, node.val+leftSum,node.val+rightSum);

      }

    helper(this.root)

    return result;


  } 

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = null;

    function helperNextLarger(node){
      if(node === null) return;

      if((node.val > lowerBound && node.val < result) || (node.val > lowerBound && result === null) ) result = node.val;

      //result = Math.min(result,node.val-lowerBound);

      if(node.left !== null) helperNextLarger(node.left);
      if(node.right !== null) helperNextLarger(node.right);


    }

    helperNextLarger(this.root);
    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    //start from top of tree, navigate downwards ,if counter matches they are cousins

    



  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };

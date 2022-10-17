class queueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new queueNode(val);
    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
      this.size = this.size + 1;
    }else{
    this.last.next = newNode;
    this.last = newNode;
    this.size = this.size+1 ;}

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size === 0){
      throw "is empty";
    }
    let returnVal = this.first;
    if(this.size ===1){
      this.first = null;
      this.last = null;
      this.size = 0;
      return returnVal;
    }
    
    this.first = this.first.next;
    this.size = this.size-1;

    return returnVal

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.size === 0){
      throw "is empty";
    }
    return this.first.val;


  }
  isEmpty() {
    if(this.size === 0){
      return true;
    }else{return false}

  }
}
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }}
let node4 = new TreeNode(2, null, null)
let node3 = new TreeNode(4, node4, null);
let node2 = new TreeNode(1, null, null);
let node1 = new TreeNode(3, node2, node3)


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(this.root === null) {
      this.root = new Node(val);
      return this;}
    let current = this.root;
    while(current){
      if(val < current.val && current.left == null) current.left = new Node(val);
      if(val > current.val && current.right == null) current.right = new Node(val);
      current = val < current.val ? current.left : current.right;
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if(this.root === null) {
      this.root = new Node(val);
      return this;}

      function helper(node){

        if(val < node.val && node.left === null) node.left = new Node(val);
        if(val > node.val && node.right === null) node.right = new Node(val);
        if(val < node.val) helper(node.left);
        if(val > node.val) helper(node.right);
      }

      helper(this.root);
      return this;

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(this.root === null) return undefined;
    let current = this.root;
    while(current){

      if(current.val === val) return current;
      current = val < current.val ? current.left : current.right;

    }
    return undefined;

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if(this.root === null) return undefined;
    let foundNode = undefined;

      function helper(node){
        if(node === null) return;
        if(node.val === val) foundNode = node;

        if(val < node.val) helper(node.left);
        if(val > node.val) helper(node.right);

      }
    
   helper(this.root);
   return foundNode;

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr =[]

    function helper(node){
      arr.push(node.val);
      if(node.left) helper(node.left);
      if(node.right) helper(node.right);
    }

    helper(this.root);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr =[]

    function helper(node){
      if(node.left) helper(node.left);
      arr.push(node.val);
      if(node.right) helper(node.right);
    }

    helper(this.root);
    return arr;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr =[]

    function helper(node){
      if(node.left) helper(node.left);
      if(node.right) helper(node.right);
      arr.push(node.val);
    }

    helper(this.root);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = new Queue;
    let arr = [];
    let currentBfs = this.root;
    let next;
      while(currentBfs){
        arr.push(currentBfs.val);
        if(currentBfs.left){
          queue.enqueue(currentBfs.left.val);
        }
        if(currentBfs.right){
          queue.enqueue(currentBfs.right.val);
        }
        if(queue.size>0){
        next = queue.dequeue()
        currentBfs = this.find(next.val);}
        else{currentBfs = null}
      }

    return arr;

  }


  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    let toSumStack = [this.root];
    if (this.root === null){
      return 0;
    }

    while (toSumStack.length){

      let current = toSumStack.pop();
      sum = sum + current.val;

      for(let child of current.children){
        toSumStack.push(child);
      }

    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    let toCountStack = [this.root];

    while (toCountStack.length){
      let current = toCountStack.pop();

      if(current.val % 2 === 0){
        count = count + 1;
      }
      for(let child of current.children){
        toCountStack.push(child);
      }

    }
    return count;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    let toCountStack = [this.root];
    
    while(toCountStack.length){
      let current = toCountStack.pop();
      if(current.val > lowerBound){
        count = count + 1;
      }
      for(let child of current.children){
        toCountStack.push(child);
      }

    }
    return count;

  }
}

module.exports = { Tree, TreeNode };

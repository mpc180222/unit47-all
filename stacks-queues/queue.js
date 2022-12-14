/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
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

  }}

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.size === 0){
      throw "is empty";
    }
    return this.first.val;


  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size === 0){
      return true;
    }else{return false}

  }
}

module.exports = Queue;

/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }


  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    this.length = this.length + 1;
    if(this.head === null){
      this.head = newNode;
    }
    if(this.tail !== null){this.tail.next = newNode}

    this.tail = newNode;

  }}

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    this.length = this.length + 1;
    if(this.head === null){
      this.head = newNode;
    }

    if(this.head !== null){
      let a = this.head;
      this.head = newNode;
      newNode.next = a;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if(this.tail === null){
      return 'empty list'
    }
    let toRemove = this.tail;
    let current = this.head;
    while(current !== null){
      if(current.next === toRemove){
        this.tail = current;
        this.length = this.length -1;
        return toRemove;
      }
      current = current.next;
    }

  }

  /** shift(): return & remove first item. */
  

  shift() {
    let toRemove = this.head;
    if(this.head === null){
      return 'empty list'
    }
    if(this.head.next === null){
      
      this.head = null;
      this.tail = null;
      this.length = 0;
      return toRemove;
      
    }
    
    this.head = toRemove.next;
    this.length = this.length-1;
    return toRemove;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(this.head === null){
      return 'empty list';
    }
    if(idx === 0){
      return this.head;
    }
    if(idx >= this.length){
      return 'out of range'
    }
    if(idx === this.length-1){
      return this.tail;
    }
    let search = 0;
    let current = this.head;
    while(search < this.length){
      if(search === idx){
        return current;
      }
      current = current.next;
      search = search +1;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(this.head === null){
      return 'empty list';
    }
    if(idx > this.length){
      return 'out of range'
    }
    let search = 0;
    let current = this.head;
    while(search < this.length){
      
      if(search === idx){
        current.val = val;
  }
    current = current.next;
    search = search +1;
    }}

   
  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, vall) {
    if(this.head === null){
      return 'empty list';
    }
    if(idx >= this.length){
      return 'out of range'
    }
    if(idx === this.length-1){
      return 'Use push() instead'
    }
    let newNodePointsTo = this.getAt(idx);
    let search = 0;
    let current = this.head;
    while(search < this.length){
      if(search === idx-1 && idx !== this.length-1){
        let newNode = new Node(vall);
        current.next = newNode;
        newNode.next = newNodePointsTo;
        this.length = this.length + 1;
        return newNode;
      }
      search = search+1;
      current = current.next;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    
    if(this.head === null){
      return 'empty list';
    }
    if(idx >= this.length){
      return 'out of range'
    }
    let returnVal = this.getAt(idx);
    if(idx === this.length-1){
      let newTail = this.getAt(idx-1);
      this.tail = newTail;
      newTail.next = null;
      this.length = this.length -1;
      return returnVal;
    }
    let prevNodePointsTo = this.getAt(idx+1);
    let search = 0;
    let current = this.head;
    while(search < this.length){
      if(search === idx-1){
        current.next = prevNodePointsTo;
        this.length = this.length -1;
        return returnVal;
        }
        search = search+1;
        current = current.next;

}}

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let search = 0;  
    let current = this.head;
    while(search < this.length){
      sum = sum + current.val;
      search = search + 1;
      current = current.next;



    }
    return sum/this.length;
  
  }
}

function checkLinkedList(list){
  let arr = []
  let current = list.head;
  while(current){
      console.log(current.val)
      arr.push(current.val);
      current = current.next;
  }
  return arr;

}

module.exports = LinkedList;




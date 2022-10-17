class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {

    this.nodes.add(vertex);
    return this.nodes;
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {

    for(let vertex of vertexArray){
      this.nodes.add(vertex);
    }
    return this.nodes;
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);

  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for(let node of this.nodes){
      node.adjacent.delete(vertex);
    }
    this.nodes.delete(vertex);

  }



  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisitStack = [start];
    let seen = new Set(toVisitStack);
    let arr = [];
    while(toVisitStack.length){
      let current = toVisitStack.pop();
      arr.push(current.value);

      for(let neighbor of current.adjacent){
        if(!seen.has(neighbor)){
          seen.add(neighbor)
          toVisitStack.push(neighbor)
      }
    }
  }
  return arr;
  }


  //['S', 'U', 'V', 'W', 'T', 'R', 'Y', 'X', 'Q', 'P']

  // correct is (["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"]
  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let seen = new Set();
    let toVisitQueue = [start];
    let arr = [];

    while(toVisitQueue.length){
      let current = toVisitQueue.shift();
      if(!seen.has(current)){
      seen.add(current);
      arr.push(current.value);
      for(let neighbor of current.adjacent){
        toVisitQueue.push(neighbor);
      }}
    }
    return arr;
  }
}

module.exports = {Graph, Node}
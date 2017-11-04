//
// GRAPH
//

class Graph {
  constructor() {
    // Uses an object/dictionary to store nodes/vertices as a prop, and an array of edges/lines as its value
    this.nodes = {/* 'vertex value': 'edges array' */};
  }

  addNode(data) {
    this.nodes[data] = [];
  }

  removeNode(data) {
    Object
     .keys(this.nodes[data])
     .forEach(edge => this.removeEdge(data, edge));

    delete this.nodes[data];
  }

  addEdge(from, to) {
    if (this.nodes[from] && this.nodes[to]) {
      this.nodes[from].push(to);
      this.nodes[to].push(from);
    }
  }

  removeEdge(from, to) {
    if (this.nodes[from] && this.nodes[to]) {
      this.nodes[from] = this.nodes[from].filter(edge => edge !== to);
      this.nodes[to] = this.nodes[to].filter(edge => edge !== from);
    }
  }

  find(data) {
    return this.nodes[data];
  }

  traverseBFS(node, fn) {
    if (this.nodes[node] === undefined) return 'Node not found';

    let queue = [node];
    let visited = [node];

    while (queue.length) {
      node = queue.shift();

      fn(node);

      for (let edge of this.nodes[node]) {
        if (!visited.includes(edge)) {
          visited.push(edge);
          queue.push(edge);
        }
      }
    }
  }

  traverseDFS(node, fn, visited = []) {
    visited.push(node);

    if (this.nodes[node] !== undefined) {
      fn(node);
    }

    for (let edge of this.nodes[node]) {
      if (!visited.includes(edge)) {
        this.traverseDFS(edge, fn, visited);
      }
    }
  }

  toString() {
    console.log(JSON.stringify(this.nodes, null, 2));
  }
}

export default Graph;

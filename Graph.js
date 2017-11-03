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

  toString() {
    console.log(JSON.stringify(this.nodes, null, 2));
  }
}

export default Graph;

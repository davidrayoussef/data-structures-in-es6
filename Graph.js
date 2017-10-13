//
// GRAPH
//

class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(data) {
    this.nodes[data] = {
      edges: {}
    };
  }

  removeNode(data) {
    Object
     .keys(this.nodes[data].edges)
     .forEach(edge => this.removeEdge(data, edge));

    delete this.nodes[data];
  }

  addEdge(from, to) {
    if (this.nodes[to] && this.nodes[from]) {
      this.nodes[to].edges[from] = true;
      this.nodes[from].edges[to] = true;
    }
  }

  removeEdge(from, to) {
    if (this.nodes[to] && this.nodes[from]) {
      delete this.nodes[to].edges[from];
      delete this.nodes[from].edges[to];
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

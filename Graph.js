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

  toString() {
    console.log(JSON.stringify(this.nodes, null, 2));
  }
}


let friends = new Graph();
friends.addNode('David');
friends.addNode('Justin');
friends.addNode('Gina');
friends.addNode('Tina');
friends.addEdge('David', 'Justin');
friends.addEdge('David', 'Gina');
friends.addEdge('Tina', 'Justin');
friends.toString();
friends.removeEdge('David', 'Justin');
friends.toString();
friends.removeNode('Gina');
friends.toString();

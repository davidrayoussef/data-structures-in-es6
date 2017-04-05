//
// TREE
//

function Node(data) {
  this.data = data;
  this.children = [];
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverse(fn) {
    const walk = (node) => {
      fn(node);
      node.children.forEach(walk);
    };

    walk(this.root);
  }

  contains(data, found = false) {
    const searchData = (node) => {
      if (node.data === data) found = true;
    };

    this.traverse(searchData, found);

    return found;
  }

  add(child, parent) {
    const newNode = new Node(child);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    const addChild = (parentNode) => {
      if (parent === parentNode.data) {
        parentNode.children.push(newNode);
      }
    };

    this.traverse(addChild);
  }

  remove(data) {
    const removeNode = (parentNode) => {
      parentNode.children = parentNode.children.filter((childNode, i) => {
        return childNode.data !== data;
      });
    };

    this.traverse(removeNode);
  }

  toString() {
    return JSON.stringify(this);
  }
}

let docTree = new Tree('root');
docTree.add('document', 'root');
docTree.add('head', 'document');
docTree.add('body', 'document');
docTree.add('header', 'body');
docTree.add('main', 'body');
docTree.add('section', 'main');
docTree.add('footer', 'body');
docTree.contains('section'); //=> true
docTree.remove('section');
docTree.toString(); //=>
/*
"{
  "root": {
    "data": "document",
    "children": [
      {
        "data": "head",
        "children": []
      },
      {
        "data": "body",
        "children": [
          {
            "data": "header",
            "children": []
          },
          {
            "data": "main",
            "children":[]
          },
          {
            "data": "footer",
            "children": []
          }
        ]
      }
    ]
  }
}"
*/

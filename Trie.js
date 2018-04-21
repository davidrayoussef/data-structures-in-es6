//
// TRIE
//

class Node {
  constructor() {
    this.children = {};
    this.end = false;
  }

  setEnd() {
    this.end = true;
  }

  isEnd() {
    return this.end;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  add(key, node = this.root) {
    const currentChar = key[0];

    if (!currentChar) {
      node.setEnd();
    }
    else {
      if ( !node.children[currentChar] ) {
        node.children[currentChar] = new Node();
      }

      return this.add( key.slice(1), node.children[currentChar] );
    }
  }

  traverse(node, fn, str = '') {
    if (node.children) {
      const { children } = node;

      Object.keys(children).map(key => {
        this.traverse( children[key], fn, str + key);
      });

      if (node.isEnd()) {
        fn(str);
      }
    }
    else {
      if (str.length) fn(str);
      return;
    }

  }

  printWords() {
    const arr = [];
    const addElement = (el) => arr.push(el);
    this.traverse(this.root, addElement);
    console.log(arr);
  }

  stringify() {
    return JSON.stringify(this, null, 2);
  }
}

const t = new Trie();
t.add('cat');
t.add('car');
t.printWords(); // ["cat", "car"]
t.stringify();
/*
"{
  "root": {
    "children": {
      "c": {
        "children": {
          "a": {
            "children": {
              "t": {
                "children": {},
                "end": true
              },
              "r": {
                "children": {},
                "end": true
              }
            },
            "end": false
          }
        },
        "end": false
      }
    },
    "end": false
  }
}"
*/

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
    let currentChar = key[0];

    if (!currentChar) {
      node.setEnd();
    }
    else if ( !node.children[currentChar] ) {
      node.children[currentChar] = new Node();
      return this.add( key.slice(1), node.children[currentChar] );
    }
    else {
      return this.add( key.slice(1), node.children[currentChar] );
    }
  }

  traverse(node, str = '', words = []) {
    if (node.children) {
      let obj = node.children;

      Object.keys(obj).map(key => {
        this.traverse( obj[key], str + key, words );
      });

      if (node.isEnd()) {
        words.push(str);
      }
    }
    else {
      if (str.length) words.push(str);
      return;
    }

    return words;
  }

  print() {
    return this.traverse(this.root);
  }

  stringify() {
    return JSON.stringify(this, null, 2);
  }
}

let t = new Trie();
t.add('cat');
t.add('car');
t.print(); // ["cat", "car"]
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

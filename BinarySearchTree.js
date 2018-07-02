//
// BINARY SEARCH TREE
//

function Node(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    let parent;

    while (true) {
      parent = current;

      if (val < current.val) {
        current = current.left;

        if (!current) {
          parent.left = newNode;
          break;
        }
      }
      else {
        current = current.right;

        if (!current) {
          parent.right = newNode;
          break;
        }
      }
    }
  }

  inOrder(node, fn) {
    debugger;
    if (node) {
      this.inOrder(node.left, fn);
      fn(node.val);
      this.inOrder(node.right, fn);
    }
  }

  preOrder(node, fn) {
    if (node) {
      fn(node.val);
      this.preOrder(node.left, fn);
      this.preOrder(node.right, fn);
    }
  }

  postOrder(node, fn) {
    if (node) {
      this.postOrder(node.left, fn);
      this.postOrder(node.right, fn);
      fn(node.val);
    }
  }

  getMin() {
    let current = this.root;

    while (current.left) {
      current = current.left;
    }

    return current.val;
  }

  getMax() {
    let current = this.root;

    while (current.right) {
      current = current.right;
    }

    return current.val;
  }

  find(val) {
    let current = this.root;

    while (current.val !== val) {
      current = val < current.val ? current.left : current.right;

      if (!current) return null;
    }

    return current;
  }

  contains(val) {
    let current = this.root;

    while (current.val !== val) {
      current = val < current.val ? current.left : current.right;

      if (!current) return false;
    }

    return true;
  }
}

function printPaths(node, path = [], pathLength = 0, paths = []) {
  if (!node) return [];

  path[pathLength] = node.val;
  pathLength++;

  if (!node.left && !node.right) {
    paths.push(Array.from({length: pathLength}, (v,i) => path[i]).join('->'));
  }
  else {
    printPaths(node.left, path, pathLength, paths);
    printPaths(node.right, path, pathLength, paths);
  }

  return paths.join('  ');
}

function invert(node) {
  if (!node) return node;

  let temp = node.left;
  node.left = node.right;
  node.right = temp;

  invert(node.left);
  invert(node.right);

  return node;
}

function lowestCommonAncestor(node, n1, n2) {
  if (node.val > Math.max(n1.val, n2.val)) {
    return lowestCommonAncestor(node.left, n1, n2);
  }
  else if (node.val < Math.min(n1.val, n2.val)) {
    return lowestCommonAncestor(node.right, n1, n2);
  }
  else return node.val;
}

function printPaths(node, path = [], pathLength = 0, paths = []) {
  if (!node) return [];

  path[pathLength] = node.val;
  pathLength++;

  if (!node.left && !node.right) {
    paths.push(Array.from({length: pathLength}, (v,i) => path[i]).join('->'));
  }
  else {
    printPaths(node.left, path, pathLength, paths);
    printPaths(node.right, path, pathLength, paths);
  }

  return paths.join('  ');
}

function sumOfLeftLeaves(node) {
  let sum = 0;

  const traverse = (node, isLeftChild) => {
    if (!node) return;

    if (isLeftChild) {
      if (!node.left && !node.right) {
        sum += node.val;
      }
    }

    traverse(node.left, true);
    traverse(node.right, false);
  }

  traverse(node);

  return sum;
}

function areIdentical(a, b) {
  if (!a && !b) return true;

  if (a && b) {
    return a.val === b.val &&
      areIdentical(a.left, b.left) &&
      areIdentical(a.right, b.right);
  }

  return false;
}

function isSymmetric(node) {
  const isMirror = (node1, node2) => {
    if (!node1 && !node2) return true;
    else if (node1 && node2 && node1.val === node2.val) {
      return isMirror(node1.left, node2.right) && isMirror(node2.left, node1.right);
    }

    return false;
  };

  return isMirror(node, node);
}

function maxDepth(node) {
  if (!node) return 0;

  const leftHeight = maxDepth(node.left);
  const rightHeight = maxDepth(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

function convertSortedArray(nums, start = 0, end = nums.length - 1) {
  if (start > end) return null;

  const mid = Math.round((start + end) / 2);
  let node = new Node(nums[mid]);

  node.left = convertSortedArray(nums, start, mid - 1);
  node.right = convertSortedArray(nums, mid + 1, end);

  return node;
}

function largestValueInEachRow(root) {
  if (!root) return []

  let result = [];
  let separator = '';
  let queue = [separator, root];
  let row = -1;

  while (queue.length > 1) {
    let node = queue[0];

    if ( node === JSON.stringify(separator) ) {
      row++;
      queue.push(separator);
      queue.shift();
      node = queue[0];
      result.push(node.val);
    }
    else {
      result[row] = Math.max(node.val, result[row]);
    }

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }

    queue.shift();
  }

  return result;
}

function sumTreeValues(root, sum = 0) {
  const traverse = (node) => {
    if (node) {
      sum += node.val;
      traverse(node.left);
      traverse(node.right);
    }
  }

  traverse(root);

  return sum;
}

function serialize(root, str = '') {
  if (!root) return str + '.' + '-';

  str += root.val + '-';

  str = serialize(root.left, str);
  str = serialize(root.right, str);

  return str;
}

function deserialize(str, arr = str.split('-'), node = new Node(0)) {
  if (arr[0] === '.') {
    arr.shift();
    return null;
  }
  else if (arr.length) {
    node.val = +arr.shift();
  }

  node.left = deserialize(str, arr, new Node(null));
  node.right = deserialize(str, arr, new Node(null));

  return node;
}

function createMinimalBST(arr, start = 0, end = arr.length - 1) {
  if (end < start) return null;

  const mid = Math.floor((start + end) / 2);
  let node = new Node( arr[mid] );

  node.left = createMinimalBST(arr, start, mid - 1);
  node.right = createMinimalBST(arr, mid + 1, end);

  return node;
}

let nums = new BinarySearchTree();
nums.insert(7);
nums.insert(3);
nums.insert(11);
nums.insert(1);
nums.insert(5);
nums.insert(9);
nums.insert(13);
nums.insert(0);
nums.insert(2);
nums.insert(4);
nums.insert(6);
nums.insert(8);
nums.insert(10);
nums.insert(12);
nums.insert(14);
console.log(nums.inOrder(nums.root)); //=> "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14"
console.log(nums.preOrder(nums.root)); //=> "7 3 1 0 2 5 4 6 11 9 8 10 13 12 14"
console.log(nums.postOrder(nums.root)); //=> "0 2 1 4 6 5 3 8 10 9 12 14 13 11 7"
const min = nums.getMin();
console.log(`Minimum value: ${min}`); //=> "Minimum value: 0"
const max = nums.getMax();
console.log(`Maximum value: ${max}`); //=> "Maximum value: 14"
console.log(printPaths(nums.root)); //=> 7->3->1->0  7->3->1->2  7->3->5->4  7->3->5->6  7->11->9->8  7->11->9->10  7->11->13->12  7->11->13->14
console.log(sumOfLeftLeaves(nums.root)); //=> 24
console.log(maxDepth(nums.root)); //=> 4
const n1 = new Node(1);
const n2 = new Node(4);
lowestCommonAncestor(nums.root, n1, n2); //=> 3
largestValueInEachRow(nums.root);
const simpleNode = {val: 10, left: {val: 1, left: null, right: null}, right: {val: 2, left: null, right: null}};
sumTreeValues(simpleNode); //=> 13
createMinimalBST([1,2,3,4,5,6,7]);

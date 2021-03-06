//
// LINKED LIST
//

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  prepend(data) {
    const newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  insert(position, data) {
    const newNode = new Node(data);
    const head = this.head;

    if (!head) {
      this.head = newNode;
      return this.head;
    }
    else if (position === 0) {
      newNode.next = head;
      this.head = newNode;
      return this.head;
    }

    let distanceFromHead = 1;
    let current = this.head;

    while (current) {
      if (distanceFromHead === position) {
        newNode.next = current.next;
        current.next = newNode;
        return current;
      }

      current = current.next;
      distanceFromHead++;
    }
  }

  deleteElements(data) {
    if (!this.head) return -1;

    let current = this.head;

    // remove from head
    while (current && current.data === data) {
      current = current.next;
      this.head = current;
    }

    while (current && current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
      }
      else current = current.next;
    }

    return this.head;
  }

  removeDuplicates() {
    if (!this.head) return -1;

    let prev = this.head;
    let current = this.head.next;
    const set = new Set().add(prev.data);

    while (current) {
      if ( set.has(current.data) ) {
        prev.next = current.next;
      }
      else {
        set.add(current.data);
        prev = current;
      }

      current = current.next;
    }
  }

  findNode(item) {
    let current = this.head;

    while (current && current.data !== item) {
      current = current.next;
    }

    return current || -1;
  }

  get(item) {
    const node = this.findNode(item);
    return node !== -1 ? node.data : null;
  }

  has(item) {
    const node = this.findNode(item);
    return node !== -1 ? true : false;
  }

  indexOf(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === value) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  lastIndexOf(value) {
    let current = this.head;
    let index = 0;
    let lastIndex = -1;

    while (current) {
      if (current.data === value) {
        lastIndex = index;
      }

      current = current.next;
      index++;
    }

    return lastIndex;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  printLinks() {
    let current = this.head;
    const elements = [];

    while (current) {
      elements.push(current.data);
      current = current.next;
    }

    console.log(elements.join(' -> '));
  }

  getRandom() {
    let current = this.head;
    const elements = [];

    while (current) {
      elements.push(current.data);
      current = current.next;
    }

    return elements[Math.floor(Math.random() * elements.length)];
  }

  forEach(fn) {
    if (typeof fn !== 'function') throw new TypeError(`${fn} is not a function`);

    let current = this.head;
    let i = 0;

    while (current) {
      current.data = fn(current.data, i);
      current = current.next;
      i++;
    }
  }

  map(fn) {
    if (typeof fn !== 'function') throw new TypeError(`${fn} is not a function`);

    let current = this.head;
    let i = 0;
    let newNode = new Node(0);
    const copy = newNode;
  
    while (current) {
      newNode.next = new Node( fn(current.data, i) );
      current = current.next;
      newNode = newNode.next;
      i++;
    }
    
    const newList = new LinkedList();
    newList.head = copy.next;

    return newList;
  }

  reverseInPlace() {
    let current = this.head;
    let prev = null;
    let next = null;
  
    while (current) {
      // save current.next before breaking link
      next = current.next;
      // point current.next to prev
      current.next = prev;
      // increment current and next
      prev = current;
      current = next;
    }
  
    this.head = prev;
  }
}

function length(head) {
  let length = 0;
  let current = head;

  while (current) {
    length++;
    current = current.next;
  }

  return length;
}

function count(head, data) {
  let count = 0;
  let current = head;

  while (current) {
    if (current.data === data) count++;
    current = current.next;
  }

  return count;
}

function getNthNodeVal(head, index) {
  let current = head;

  while (current && index > 0) {
    current = current.next;
    index--;
  }

  return current.data;
}

function getNthToLast(head, index) {
  let node1 = head;
  let node2 = head;

  for (let i = 0; i < index - 1; i++) {
    if (node2 === null) return null;
    node2 = node2.next;
  }

  if (node2 === null) return null;

  while (node2.next) {
    node1 = node1.next;
    node2 = node2.next;
  }

  return node1;
}

function reversePrint(node) {
  if (!node) return;

  reversePrint(node.next);

  console.log(node.data);
}

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

function cycleSize(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let size = 0;

      while (true) {
        slow = slow.next;
        size++;

        if (slow === fast) {
          return size;
        }
      }
    }
  }
}

function mergeSortedLists(l1, l2) {
  let merged = new Node(0);
  let copy = merged;

  while (l1 && l2) {
    if (l1.data < l2.data) {
      merged.next = l1;
      l1 = l1.next;
      merged = merged.next;
    }
    else {
      merged.next = l2;
      l2 = l2.next;
      merged = merged.next;
    }
  }

  if (l1) merged.next = l1;
  if (l2) merged.next = l2;

  return copy.next;
}

function appendList(listA, listB) {
  if (!listA && !listB) return null;
  else if (listA && !listB) return listA;
  else if (listB && !listA) return listB;

  let current = listA;

  while (current.next) {
    current = current.next;
  }

  current.next = listB;

  return listA;
}

function reverse(head) {
  let node = null;

  while (head) {
    node = new Node(head.data, node);
    head = head.next;
  }

  return node;
}

function isPalindrome(head) {
  const arr = [];
  let current = head;

  while (current) {
    arr.push(current.data);
    current = current.next;
  }

  return arr.join('') === arr.reverse().join('');
}

function oddEvenList(head) {
  if (!head) return head;

  let odd = head;
  let even = head.next;
  const evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
}

function partitionList(head, x) {
  if (!head) return head;

  const head1 = new Node(0);
  const head2 = new Node(0);
  let current1 = head1;
  let current2 = head2;

  while (head) {
    if (head.data < x) {
      current1.next = head;
      current1 = current1.next;
    }
    else {
      current2.next = head;
      current2 = current2.next;
    }
    head = head.next;
  }

  current2.next = null;
  current1.next = head2.next;

  return head1.next;
}

function listToArray(head) {
  const arr = [];
  let current = head;

  while (current) {
    arr.push(current.data);
    current = current.next;
  }

  return arr;
}

function getNthNode(node, index) {
  if (!node || index < 0) throw new Error();

  let current = node;

  while (current && index > 0) {
    current = current.next;
    index--;
  }

  if (!current) throw new Error();

  return current;
}

function sortedInsert(head, data) {
  const newNode = new Node(data);

  if (!head) return newNode;

  let current = head;
  let temp;

  while (current) {
    if (current.data > data) {
      newNode.next = head;

      return newNode;
    }

    else if (current.data < data && !current.next) {
      current.next = newNode;
      break;
    }

    else if (current.data < data && current.next.data > data) {
      temp = current.next;
      newNode.next = temp;
      current.next = newNode;
      break;
    }

    current = current.next;
  }

  return head;
}

function anyMatch(head, fn) {
  let current = head;

  while (current) {
    if ( fn(current.data) ) return true;
    current = current.next;
  }

  return false;
}

function allMatch(head, fn) {
  let current = head;

  while (current) {
    if ( !fn(current.data ) ) return false;
    current = current.next;
  }

  return true;
}

function filter(head, fn) {
  let current = head;
  let newNode = new Node(0);
  const copy = newNode;

  while (current) {
    if ( fn(current.data) ) {
      newNode.next = new Node(current.data);
      newNode = newNode.next;
    }

    current = current.next;
  }

  return copy.next;
}

function reduce(head, fn, init) {
  let acc = init;

  while (head) {
    acc = fn(acc, head.data);
    head = head.next;
  }

  return acc;
}

export default LinkedList;

export { Node, hasCycle, reverse };

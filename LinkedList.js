//
// LINKED LIST
//

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

class LinkedList {
  constructor() {
    this.head = null
  }

  find(item) {
    let current = this.head;

    while (current.data !== item) {
      current = current.next;
    }

    return current;
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
    let newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  insert(head, position, data) {
    const newNode = new Node(data);

    if (!head) {
      head = newNode;
      return head;
    }
    else if (position === 0) {
      newNode.next = head;
      head = newNode;
      return head;
    }

    let distanceFromHead = 1;
    let current = head;

    while (current) {
      if (distanceFromHead === position) {
        newNode.next = current.next;
        current.next = newNode;
        return head;
      }

      current = current.next;
      distanceFromHead++;
    }
  }

  deleteElements(head, data) {
    if (!head) return head;

    while (head && head.data === data) head = head.next;

    let current = head;

    while (current && current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
      }
      else current = current.next;
    }

    return head;
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
    let elements = [];

    while (current) {
      elements.push(current.data);
      current = current.next;
    }

    console.log(elements.join(' -> '));
  }

  getRandom() {
    let current = this.head;
    let elements = [];

    while (current) {
      elements.push(current.data);
      current = current.next;
    }

    return elements[Math.floor(Math.random() * elements.length)];
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

function getNthNodeVal(node, index) {
  let current = node;

  while (current && index > 0) {
    current = current.next;
    index--;
  }

  return current.data;
}

function reversePrint(node) {
  if (!node) return;

  reversePrint(node.next);

  console.log(node.data);
}

function removeDuplicates(head) {
  let current = head;

  while (current && current.next) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    }
    else current = current.next;
  }

  return head;
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

function reverseList(head) {
  let current = head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  head = prev;

  return head;
}

function isPalindrome(head) {
  let arr = [];
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
  let evenHead = even;

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

  let head1 = new Node(0);
  let head2 = new Node(0);
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
  let arr = [];
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
  let newNode = new Node(data);

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
  let copy = newNode;

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

let cities = new LinkedList();
cities.append('Jersey City');
cities.append('NYC');
cities.append('Miami');
cities.append('LA');
reversePrint(cities.head);
/*
LA
Miami
NYC
Jersey City
*/

let numbers = new LinkedList();
numbers.append(1);
numbers.append(1);
numbers.append(2);
numbers.append(3);
numbers.append(3);
console.log(JSON.stringify(removeDuplicates(numbers.head))); //=> "{"data":1,"next":{"data":2,"next":{"data":3,"next":null}}}"

let numbers2 = new LinkedList();
numbers2.append(1);
numbers2.append(2);
numbers2.append(3);
numbers2.append(2);
numbers2.append(1);
console.log(isPalindrome(numbers2.head)); //=> true

let numbers3 = new LinkedList();
numbers3.append(1);
numbers3.append(2);
numbers3.append(3);
numbers3.append(4);
numbers3.append(5);
console.log(JSON.stringify(oddEvenList(numbers3.head))); //=> "{"data":1,"next":{"data":3,"next":{"data":5,"next":{"data":2,"next":{"data":4,"next":null}}}}}"

let numbers4 = new LinkedList();
numbers4.append(1);
numbers4.append(2);
numbers4.append(3);
console.log(getNthNodeVal(numbers4.head, 1)); //=> 2

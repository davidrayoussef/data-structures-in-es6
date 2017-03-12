//
// STACK
//

class Stack {
  constructor() {
    this.store = [];
    this.top = 0;
  }

  push(element) {
    this.store[this.top++] = element;
  }

  pop() {
    return this.store[--this.top];
  }

  peek() {
    return this.store[this.top - 1];
  }

  clear() {
    this.top = 0;
  }

  length() {
    return this.top;
  }

  print() {
    console.log(this.store.reverse().join('\n'));
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.peek()); //=> 5
const popped = stack.pop();
console.log(popped); //=> 5
console.log(stack.length()); //=> 4
stack.push(6);
console.log(stack.peek()); //=> 6
stack.clear();
console.log(stack.peek()); //=> undefined
console.log(stack.length()); //=> 0

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
/*
5
4
3
2
1
*/

//
// QUEUE
//

class Queue {
  constructor() {
    this.store = [];
  }

  enqueue(element) {
    this.store.push(element);
  }

  dequeue() {
    return this.store.shift();
  }

  front() {
    return this.store[0];
  }

  back() {
    return this.store[this.store.length - 1];
  }

  empty() {
    return this.store.length === 0;
  }

  print() {
    return this.store.join(' ');
  }
}

let q = new Queue();
q.enqueue('first');
q.enqueue('second');
q.enqueue('third');
q.enqueue('fourth');
console.log(q.print()); //=> "first second third fourth"
console.log(q.dequeue()); //=> "first"
console.log(q.print()); //=> "second third fourth"
console.log(`Front of queue: ${q.front()}`); //=> "Front of queue: second"
console.log(`Back of queue: ${q.back()}`); //=> "Back of queue: fourth"

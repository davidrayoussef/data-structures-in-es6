//
// ARRAY (LIST)
//

class List {
  constructor(...nums) {
    this.length = nums.length;

    nums.map((num,i) => this[i] = num);

    Object.defineProperty(this, 'length', {
      enumerable: false,
      configurable: false
    });

    return this;
  }

  push(...items) {
    items.map(item => {
      this[this.length] = item;
      this.length++;
    });

    return this.length;
  }

  pop() {
    const item = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;

    return item;
  }

  shift() {
    let item = this[0];
    delete this[0];
    Object.keys(this).map((key,i) => this[i] = this[key]);
    delete this[this.length - 1];
    this.length--;

    return item;
  }

  unshift(...items) {
    const itemLength = items.length;

    for (let i = this.length + itemLength - 1; i >= itemLength; i--) {
      this[i] = this[i - itemLength];
    }

    items.map((item,i) => {
      this[i] = item;
      this.length++;
    });

    return this.length;
  }

  filter(fn) {
    return Object.keys(this).map(key => this[key]).filter(fn);
  }
}

let list = new List(3,4,5,6);
list.push(7,8,9,10);
list.unshift(0,1,2);
list.pop(); //=> 10
list.shift(); //=> 0
list.length; //=> 9
list.filter(v => v > 5); //=> [6, 7, 8, 9]

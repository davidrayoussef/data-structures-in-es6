//
// ARRAY (LIST)
//

class List {
  constructor(...args) {
    if (!args) return this;

    else if ( Array.isArray(args[0]) ) {
      const arr = args[0];

      for (let i = 0; i < arr.length; i++) {
        this[i] = arr[i];
      }

      this.length = arr.length;
    }

    else if (args.length === 1) {
      this.length = args[0];

      for (let i = 0; i < this.length; i++) {
        this[i] = undefined;
      }
    }

    else {
      for (let i = 0; i < args.length; i++) {
        this[i] = args[i];
      }

      this.length = args.length;
    }

    Object.defineProperty(this, 'length', {
      enumerable: false
    });

    return this;
  }

  push(...items) {
    for (let item of items) {
      this[this.length] = item;
      this.length++;
    }

    return this.length;
  }

  pop() {
    const itemToReturn = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;

    return itemToReturn;
  }

  shift() {
    const itemToReturn = this[0];
    delete this[0];

    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }

    delete this[this.length - 1];
    this.length--;

    return itemToReturn;
  }

  unshift(...items) {
    const itemLength = items.length;

    for (let i = this.length + itemLength - 1; i >= itemLength; i--) {
      this[i] = this[i - itemLength];
    }

    for (let i = 0; i < items.length; i++) {
      this[i] = items[i];
      this.length++;
    }

    return this.length;
  }

  splice(startIndex, deleteCount = 0, ...itemsToAdd) {
    const itemLength = this.length - 1;
    const itemsToRemove = [];

    if (deleteCount > this.length) {
      deleteCount = this.length - startIndex;
    }

    for (let i = startIndex; i < startIndex + deleteCount; i++) {
      itemsToRemove.push( this[i] );
    }

    for (let i = 0; i < deleteCount; i++) {
      for (let j = startIndex; j < itemLength; j++) {
        this[j] = this[j + 1];
        delete this[j + 1];
      }
    }

    this.length -= deleteCount;

    if (itemsToAdd.length > 0) {
      const itemLength = this.length - 1;
      const rest = [];

      for (let j = startIndex; j <= itemLength; j++) {
        rest.unshift(this.pop());
      }

      this.push( ...itemsToAdd, ...rest );
    }

    return itemsToRemove;
  }

  sort() {
    for (let i = this.length - 1; i >= 1; i--) {
      for (let j = 0; j <= i; j++) {
        if (this[j] > this[j + 1]) {
          [ this[j + 1], this[j] ] = [ this[j], this[j + 1] ];
        }
      }
    }

    return this;
  }

  forEach(fn, thisArg) {
    for (let index = 0; index < this.length; index++) {
      fn.call(thisArg, this[index], index, this);
    }
  }

  filter(fn) {
    const result = [];
    const arr = Object(this);

    for (let index = 0; index < this.length; index++) {
      const val = this[index];

      if ( fn(val, index, arr) ) {
        result.push(val);
      }
    }

    return result;
  }

  // TODO map, reduce, every, some, find, findIndex, ...
}

export default List;

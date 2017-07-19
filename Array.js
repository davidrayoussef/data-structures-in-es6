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
    let itemsToRemove = [];

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
      let rest = [];

      for (let j = startIndex; j <= itemLength; j++) {
        rest.unshift(this.pop());
      }

      this.push( ...itemsToAdd, ...rest );
    }

    return itemsToRemove;
  }

  filter(fn) {
    let result = [];
    const arr = Object(this);

    for (let index = 0; index < this.length; index++) {
      let val = this[index];

      if ( fn(val, index, arr) ) {
        result.push(val);
      }
    }

    return result;
  }
}

export default List;

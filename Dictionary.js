//
// MAP (DICTIONARY)
//

class Dictionary {
  constructor() {
    this.store = {};
  }

  add(key, value) {
    this.store[key] = value;
  }

  find(key) {
    return this.store[key];
  }

  remove(key) {
    delete this.store[key];
  }

  showAll() {
    return Object.keys(this.store).map(key => `${key}: ${this.store[key]}`).join('   ');
  }

  count() {
    return Object.keys(this.store).length;
  }

  clear() {
    this.store = {};
  }
}

let entries = new Dictionary();
entries.add('first', 1);
entries.add('second', 2);
entries.add('third', 3);
entries.add('fourth', 4);
console.log(`Number of entries: ${entries.count()}`); //=> Number of entries: 4
console.log(entries.find('second')); //=> 2
entries.remove('third');
console.log(entries.showAll()); //=> first: 1   second: 2   fourth: 4
entries.clear();
console.log(`Number of entries: ${entries.count()}`); //=> Number of entries: 0

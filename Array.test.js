import List from './Array';
import { expect, assert } from 'chai';

describe('constructor', () => {

  it('should return an instance of a List', () => {

    expect(new List()).to.be.an.instanceof(List);

  });

  it('should return a new List of length n when passed a single integer n', () => {

    const actual = new List(3).length;
    const expected = 3;

    assert.equal(actual, expected);

  });

  it('should return a new List Object of n items when passed n arguments', () => {

    const actual = JSON.stringify(new List(1,2,3,4));
    const expected = '{"0":1,"1":2,"2":3,"3":4}';

    assert.equal(actual, expected);

  });

  it('should return a new List Object of n items when passed an array of n items', () => {

    const actual = JSON.stringify(new List([1,2,3,4,5]));
    const expected = '{"0":1,"1":2,"2":3,"3":4,"4":5}';

    assert.equal(actual, expected);

  });

});

describe('length', () => {

  it('should return correct length of new List', () => {

    const actual = new List(1,2,3,4).length;
    const expected = 4;

    assert.equal(actual, expected);

  });

  it('should increment when new item is added', () => {

    let list = new List();
    list.push('item');

    const actual = list.length;
    const expected = 1;

    assert.equal(actual, expected);

  });

  it('should decrement when item is removed', () => {

    let list = new List(1,2,3);
    list.pop();

    const actual = list.length;
    const expected = 2;

    assert.equal(actual, expected);

  });

});

describe('push', () => {

  it('should add item to end of List instance', () => {

    let list = new List();

    list.push('first item');
    list.push('second item');

    const actual = list[list.length - 1];
    const expected = 'second item';

    assert.equal(actual, expected);

  });

  it('should add several items to List instance if passed more than one argument', () => {

    let list = new List();

    list.push('first', 'second', 'third');

    const actual = list.length;
    const expected = 3;

    assert.equal(actual, expected);

  });

});

describe('pop', () => {

  it('should return item from end of List instance', () => {

    let list = new List('first', 'last');

    const actual = list.pop();
    const expected = 'last';

    assert.equal(actual, expected);

  });

  it('should remove last item of List instance', () => {

    let list = new List('first', 'second');

    list.pop();

    const actual = list[list.length - 1];
    const expected = 'first';

    assert.equal(actual, expected);

  });

  it('should decrement length prop after removing item', () => {

    let list = new List('first', 'second');

    list.pop();

    const actual = list.length;
    const expected = 1;

    assert.equal(actual, expected);

  });

});

describe('shift', () => {

  it('should return item from beginning of List instance', () => {

    let list = new List('first', 'last');

    const actual = list.shift();
    const expected = 'first';

    assert.equal(actual, expected);

  });

  it('should remove first item of List instance', () => {

    let list = new List('first', 'second');

    list.shift();

    const actual = list[0];
    const expected = 'second';

    assert.equal(actual, expected);

  });

  it('should decrement length prop after removing item', () => {

    let list = new List('first', 'second');

    list.shift();

    const actual = list.length;
    const expected = 1;

    assert.equal(actual, expected);

  });

});

describe('unshift', () => {

  it('should add item to beginning of List instance', () => {

    let list = new List();

    list.unshift('first item');
    list.unshift('second item');

    const actual = list[0];
    const expected = 'second item';

    assert.equal(actual, expected);

  });

  it('should add several items to List instance if passed more than one argument', () => {

    let list = new List();

    list.unshift('first', 'second', 'third');

    const actual = list.length;
    const expected = 3;

    assert.equal(actual, expected);

  });

});

describe('splice', () => {

  it('should correctly remove items', () => {

    let list = new List(1,2,3,4);

    list.splice(1, 2);

    const actual = JSON.stringify( list );
    const expected = '{"0":1,"1":4}';

    assert.equal(actual, expected);

  });

  it('should return removed items', () => {

    let list = new List(1,2,3,4);

    const actual = JSON.stringify( list.splice(1, 2) );
    const expected = '[2,3]';

    assert.equal(actual, expected);

  });

  it('should add items in correct positions', () => {

    let list = new List('apple', 'pear', 'banana');

    list.splice(2, 0, 'orange', 'melon');

    const actual = JSON.stringify( list );
    const expected = '{"0":"apple","1":"pear","2":"orange","3":"melon","4":"banana"}';

    assert.equal(actual, expected);

  });

  it('should return correct length after removing items', () => {

    let list = new List(1,2,3,4);

    list.splice(0, 3);

    const actual = list.length;
    const expected = 1;

    assert.equal(actual, expected);

  });

});

describe('filter', () => {

  it('should return an array of evens if passed a predicate function for evens', () => {

    let list = new List(1,2,3,4,5,6,7,8,9);

    const isEven = (n) => n % 2 === 0;
    const evens = list.filter(isEven);

    const actual = evens.join('');
    const expected = '2468';

    assert.equal(actual, expected);

  });

  it('should return numbers from list of mixed types if passed predicate function for numbers', () => {

    let list = new List(5, null, undefined, 2.5, {}, [], 'string', -3);

    const isNumber = (n) => typeof n === 'number';
    const nums = list.filter(isNumber);

    const areAllNumbers = nums.every(v => typeof v === 'number');

    expect(areAllNumbers).to.be.true;

  });

  it('should filter list of objects based on passed predicate function', () => {

    let people = new List(
      { name: 'Pete', age: 19 },
      { name: 'Emily', age: 25 },
      { name: 'Lou', age: 30 },
      { name: 'Amy', age: 18 }
    );

    const isOver20 = (obj) => obj.age > 20;

    const actual = JSON.stringify( people.filter(isOver20) );
    const expected = '[{"name":"Emily","age":25},{"name":"Lou","age":30}]';

    assert.equal(actual, expected);

  });

});

import List from './Array';
import { expect, assert } from 'chai';

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

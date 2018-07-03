import List from './Array';
import { expect, assert } from 'chai';

describe('List', () => {
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
      const nums = new List(1,2,3,4);

      const actual = JSON.stringify(nums);
      const expected = '{"0":1,"1":2,"2":3,"3":4}';

      assert.equal(actual, expected);
    });

    it('should return a new List Object of n items when passed an array of n items', () => {
      const nums = new List([1,2,3,4,5]);

      const actual = JSON.stringify(nums);
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
      const list = new List();

      list.push('item');

      const actual = list.length;
      const expected = 1;

      assert.equal(actual, expected);
    });

    it('should decrement when item is removed', () => {
      const list = new List(1,2,3);

      list.pop();

      const actual = list.length;
      const expected = 2;

      assert.equal(actual, expected);
    });
  });

  describe('push', () => {
    it('should add item to end of List instance', () => {
      const list = new List();

      list.push('first item');
      list.push('second item');

      const actual = list[list.length - 1];
      const expected = 'second item';

      assert.equal(actual, expected);
    });

    it('should add several items to List instance if passed more than one argument', () => {
      const list = new List();

      list.push('first', 'second', 'third');

      const actual = list.length;
      const expected = 3;

      assert.equal(actual, expected);
    });
  });

  describe('pop', () => {
    it('should return item from end of List instance', () => {
      const list = new List('first', 'last');

      const actual = list.pop();
      const expected = 'last';

      assert.equal(actual, expected);
    });

    it('should remove last item of List instance', () => {
      const list = new List('first', 'second');

      list.pop();

      const actual = list[list.length - 1];
      const expected = 'first';

      assert.equal(actual, expected);
    });

    it('should decrement length prop after removing item', () => {
      const list = new List('first', 'second');

      list.pop();

      const actual = list.length;
      const expected = 1;

      assert.equal(actual, expected);
    });
  });

  describe('shift', () => {
    it('should return item from beginning of List instance', () => {
      const list = new List('first', 'last');

      const actual = list.shift();
      const expected = 'first';

      assert.equal(actual, expected);
    });

    it('should remove first item of List instance', () => {
      const list = new List('first', 'second');

      list.shift();

      const actual = list[0];
      const expected = 'second';

      assert.equal(actual, expected);
    });

    it('should decrement length prop after removing item', () => {
      const list = new List('first', 'second');

      list.shift();

      const actual = list.length;
      const expected = 1;

      assert.equal(actual, expected);
    });
  });

  describe('unshift', () => {
    it('should add item to beginning of List instance', () => {
      const list = new List();

      list.unshift('first item');
      list.unshift('second item');

      const actual = list[0];
      const expected = 'second item';

      assert.equal(actual, expected);
    });

    it('should add several items to List instance if passed more than one argument', () => {
      const list = new List();

      list.unshift('first', 'second', 'third');

      const actual = list.length;
      const expected = 3;

      assert.equal(actual, expected);
    });
  });

  describe('splice', () => {
    it('should correctly remove items', () => {
      const list = new List(1,2,3,4);

      list.splice(1, 2);

      const actual = JSON.stringify(list);
      const expected = '{"0":1,"1":4}';

      assert.equal(actual, expected);
    });

    it('should return removed items', () => {
      const list = new List(1,2,3,4);

      const actual = JSON.stringify( list.splice(1, 2) );
      const expected = '[2,3]';

      assert.equal(actual, expected);
    });

    it('should add items in correct positions', () => {
      const list = new List('apple', 'pear', 'banana');

      list.splice(2, 0, 'orange', 'melon');

      const actual = JSON.stringify(list);
      const expected = '{"0":"apple","1":"pear","2":"orange","3":"melon","4":"banana"}';

      assert.equal(actual, expected);
    });

    it('should return correct length after removing items', () => {
      const list = new List(1,2,3,4);

      list.splice(0, 3);

      const actual = list.length;
      const expected = 1;

      assert.equal(actual, expected);
    });
  });

  describe('sort', () => {
    it('should correctly sort numbers in ascending order', () => {
      const nums = new List(6, 4, 8, 2, 7, 9, 0, 1, 3, -999, 10, 6);

      nums.sort();

      const actual = JSON.stringify( Array.from(nums) );
      const expected = '[-999,0,1,2,3,4,6,6,7,8,9,10]';

      assert.equal(actual, expected);
    });
  });

  describe('forEach', () => {
    it('should iterate over the List, copying each value to a new array', () => {
      const list = new List('value1', 'value2', 'value3');
      const values = [];

      list.forEach(v => {
        values.push(v);
      });

      const actual = JSON.stringify(values);
      const expected = '["value1","value2","value3"]';

      assert.equal(actual, expected);
    });

    it('should iterate over the List, copying each index to a new array', () => {
      const list = new List('value1', 'value2', 'value3');
      const indices = [];

      list.forEach((_,i) => {
        indices.push(i);
      });

      const actual = JSON.stringify(indices);
      const expected = '[0,1,2]';

      assert.equal(actual, expected);
    });

    it('should iterate over the List, copying the entire List Object for each iteration', () => {
      const list = new List(0, 1, 2);
      const result = [];

      list.forEach((v,i,a) => {
        result.push(a);
      });

      const actual = JSON.stringify(result);
      const expected = '[{"0":0,"1":1,"2":2},{"0":0,"1":1,"2":2},{"0":0,"1":1,"2":2}]';

      assert.equal(actual, expected);
    });

    it('should use the proper context (thisArg as 2nd param) when this keyword is used in callback function', () => {
      const list = new List(1, 2, 3, 4, 5);
      const obj = {
        val: 0,
        sum: function(arr) {
          arr.forEach(function(v) {
            this.val += v;
          }, this);
        }
      };

      obj.sum(list);

      const actual = obj.val;
      const expected = 15;

      assert.equal(actual, expected);
    });
  });

  describe('filter', () => {
    it('should return an array of evens if passed a predicate function for evens', () => {
      const list = new List(1,2,3,4,5,6,7,8,9);

      const isEven = (n) => n % 2 === 0;
      const evens = list.filter(isEven);

      const actual = evens.join('');
      const expected = '2468';

      assert.equal(actual, expected);
    });

    it('should return numbers from list of mixed types when passed a predicate function for numbers', () => {
      const list = new List(5, null, undefined, 2.5, {}, [], 'string', -3);

      const isNumber = (n) => typeof n === 'number';
      const nums = list.filter(isNumber);

      const areAllNumbers = nums.every(v => typeof v === 'number');

      expect(areAllNumbers).to.be.true;
    });

    it('should correctly filter list of objects based on passed predicate function', () => {
      const people = new List(
        { name: 'Pete', age: 19 },
        { name: 'Emily', age: 25 },
        { name: 'Lou', age: 30 },
        { name: 'Amy', age: 18 }
      );

      const isOver20 = (obj) => obj.age > 20;
      const result = people.filter(isOver20);

      const actual = JSON.stringify(result);
      const expected = '[{"name":"Emily","age":25},{"name":"Lou","age":30}]';

      assert.equal(actual, expected);
    });
  });
});
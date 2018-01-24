import LinkedList, { Node } from './LinkedList';
import { expect, assert } from 'chai';

describe('LinkedList', () => {

  describe('constructor', () => {

    it('should return an instance of a Linked List', () => {

      expect(new LinkedList()).to.be.an.instanceof(LinkedList);

    });

  });

  describe('append', () => {

    it('should add a value to the end', () => {

      let nums = new LinkedList();

      nums.append(1);
      nums.append(2);

      const actual = JSON.stringify(nums);
      const expected = '{"head":{"data":1,"next":{"data":2,"next":null}}}';

      assert.equal(actual, expected);

    });

  });

  describe('prepend', () => {

    it('should add a value to the beginning', () => {

      let cities = new LinkedList();

      cities.prepend('New York City');
      cities.prepend('Los Angeles');

      const actual = cities.head.data;
      const expected = 'Los Angeles';

      assert.equal(actual, expected);

    });

  });

  describe('insert', () => {

    it('should insert a node at position 1 with a value of "100"', () => {

      let linkedList = new LinkedList();

      linkedList.append('0');
      linkedList.append('2');
      linkedList.insert(1, '100');

      const actual = JSON.stringify(linkedList);
      const expected = '{"head":{"data":"0","next":{"data":"100","next":{"data":"2","next":null}}}}';

      assert.equal(actual, expected);

    });

  });

  describe('indexOf', () => {

    it('should return the index of the passed in value', () => {

      let linkedList = new LinkedList();

      linkedList.append('value at index 0');
      linkedList.append('value at index 1');
      linkedList.append('value at index 2');

      const actual = linkedList.indexOf('value at index 2');
      const expected = 2;

      assert.equal(actual, expected);

    });

    it('should return -1 when value is not found', () => {

      let linkedList = new LinkedList();

      linkedList.append('apples');
      linkedList.append('oranges');
      linkedList.append('grapes');

      const actual = linkedList.indexOf('pears');
      const expected = -1;

      assert.equal(actual, expected);

    });

  });

  describe('lastIndexOf', () => {

    it('should return the last index of the passed in value', () => {

      let linkedList = new LinkedList();

      linkedList.append('1');
      linkedList.append('2');
      linkedList.append('3');
      linkedList.append('2');
      linkedList.append('4');

      const actual = linkedList.lastIndexOf('2');
      const expected = 3;

      assert.equal(actual, expected);

    });

    it('should return -1 when value is not found', () => {

      let linkedList = new LinkedList();

      linkedList.append('bananas');
      linkedList.append('watermelons');
      linkedList.append('peaches');

      const actual = linkedList.indexOf('blueberries');
      const expected = -1;

      assert.equal(actual, expected);

    });

  });

});

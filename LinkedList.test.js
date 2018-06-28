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

      const nums = new LinkedList();

      nums.append(1);
      nums.append(2);

      const actual = JSON.stringify(nums);
      const expected = '{"head":{"data":1,"next":{"data":2,"next":null}}}';

      assert.equal(actual, expected);

    });

  });

  describe('prepend', () => {

    it('should add a value to the beginning', () => {

      const cities = new LinkedList();

      cities.prepend('New York City');
      cities.prepend('Los Angeles');

      const actual = cities.head.data;
      const expected = 'Los Angeles';

      assert.equal(actual, expected);

    });

  });

  describe('insert', () => {

    it('should insert a node at position 1 with a value of "100"', () => {

      const linkedList = new LinkedList();

      linkedList.append('0');
      linkedList.append('2');
      linkedList.insert(1, '100');

      const actual = JSON.stringify(linkedList);
      const expected = '{"head":{"data":"0","next":{"data":"100","next":{"data":"2","next":null}}}}';

      assert.equal(actual, expected);

    });

  });

  describe('deleteElements', () => {

    it('should remove all elements that match the passed in value', () => {

      const linkedList = new LinkedList();

      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      linkedList.append(2);

      linkedList.deleteElements(2);

      const actual = JSON.stringify(linkedList);
      const expected = '{"head":{"data":1,"next":{"data":3,"next":null}}}';

      assert.equal(actual, expected);

    });

  });

  describe('removeDuplicates', () => {

    it('should remove all duplicate values', () => {

      const linkedList = new LinkedList();

      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      linkedList.append(2);
      linkedList.append(1);
      linkedList.append(3);

      linkedList.removeDuplicates();

      const actual = JSON.stringify(linkedList);
      const expected = '{"head":{"data":1,"next":{"data":2,"next":{"data":3,"next":null}}}}';

      assert.equal(actual, expected);

    });

  });

  describe('findNode', () => {

    it('should return node of matching value', () => {

      const linkedList = new LinkedList();

      linkedList.append('A');
      linkedList.append('B');
      linkedList.append('C');
      linkedList.append('D');

      const result = linkedList.findNode('C');

      const actual = JSON.stringify(result);
      const expected = '{"data":"C","next":{"data":"D","next":null}}';

      assert.equal(actual, expected);

    });

    it('should return -1 when value is not found', () => {

      const linkedList = new LinkedList();

      linkedList.append('A');
      linkedList.append('B');
      linkedList.append('C');
      linkedList.append('D');

      const actual = linkedList.findNode('Z');
      const expected = -1;

      assert.equal(actual, expected);

    });

  });

  describe('get', () => {

    it('should return value when found', () => {

      const linkedList = new LinkedList();

      linkedList.append('A');
      linkedList.append('B');
      linkedList.append('C');
      linkedList.append('D');

      const actual = linkedList.get('C');
      const expected = 'C';

      assert.equal(actual, expected);

    });

    it('should return null when value is not found', () => {

      const linkedList = new LinkedList();

      linkedList.append('A');
      linkedList.append('B');
      linkedList.append('C');
      linkedList.append('D');

      const actual = linkedList.get('Z');
      const expected = null;

      assert.equal(actual, expected);

    });

  });

  describe('has', () => {

    it('should return true if value exists', () => {

      const linkedList = new LinkedList();

      linkedList.append('A');
      linkedList.append('B');
      linkedList.append('C');
      linkedList.append('D');

      expect( linkedList.has('B') ).to.be.true;

    });

    it('should return false if value does not exist', () => {

      const linkedList = new LinkedList();

      linkedList.append('A');
      linkedList.append('B');
      linkedList.append('C');
      linkedList.append('D');

      expect( linkedList.has('Z') ).to.be.false;

    });

  });

  describe('indexOf', () => {

    it('should return the index of the passed in value', () => {

      const linkedList = new LinkedList();

      linkedList.append('value at index 0');
      linkedList.append('value at index 1');
      linkedList.append('value at index 2');

      const actual = linkedList.indexOf('value at index 2');
      const expected = 2;

      assert.equal(actual, expected);

    });

    it('should return -1 when value is not found', () => {

      const linkedList = new LinkedList();

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

      const linkedList = new LinkedList();

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

      const linkedList = new LinkedList();

      linkedList.append('bananas');
      linkedList.append('watermelons');
      linkedList.append('peaches');

      const actual = linkedList.indexOf('blueberries');
      const expected = -1;

      assert.equal(actual, expected);

    });

  });

  describe('forEach', () => {

    it('should correctly run a function on each node value', () => {
      
      const nums = new LinkedList();
      const double = (n) => n * 2;

      nums.append(1);
      nums.append(2);
      nums.append(3);            

      nums.forEach(double);

      const actual = JSON.stringify(nums);
      const expected = '{"head":{"data":2,"next":{"data":4,"next":{"data":6,"next":null}}}}';

      assert.equal(actual, expected);

    });

    it('should throw Error when a function is not passed', () => {
      
      const nums = new LinkedList();
      const notAFunction = 'string';

      expect( () => nums.forEach(notAFunction) ).to.throw();

    });

  });

});

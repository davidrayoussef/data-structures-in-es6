import LinkedList from './LinkedList';
import { hasCycle, reverse } from './LinkedList';

describe('LinkedList', () => {
  describe('constructor', () => {
    it('should return an instance of a Linked List', () => {
      expect(new LinkedList()).toBeInstanceOf(LinkedList);
    });
  });

  describe('append', () => {
    it('should add a value to the end', () => {
      const nums = new LinkedList();
      nums.append(1);
      nums.append(2);
      const actual = JSON.stringify(nums);
      const expected = '{"head":{"data":1,"next":{"data":2,"next":null}}}';
      expect(actual).toEqual(expected);
    });
  });

  describe('prepend', () => {
    it('should add a value to the beginning', () => {
      const cities = new LinkedList();
      cities.prepend('New York City');
      cities.prepend('Los Angeles');
      const actual = cities.head.data;
      const expected = 'Los Angeles';
      expect(actual).toEqual(expected);
    });
  });

  describe('insert', () => {
    it('should insert a node at position 1 with a value of "100"', () => {
      const linkedList = new LinkedList();
      linkedList.append('0');
      linkedList.append('2');
      linkedList.insert(1, '100');
      const actual = JSON.stringify(linkedList);
      const expected =
        '{"head":{"data":"0","next":{"data":"100","next":{"data":"2","next":null}}}}';
      expect(actual).toEqual(expected);
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
      expect(actual).toEqual(expected);
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
      expect(actual).toEqual(expected);
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
      expect(actual).toEqual(expected);
    });

    it('should return -1 when value is not found', () => {
      const linkedList = new LinkedList();
      linkedList.append('A');
      linkedList.append('B');
      linkedList.append('C');
      linkedList.append('D');
      const actual = linkedList.findNode('Z');
      const expected = -1;
      expect(actual).toEqual(expected);
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
      expect(actual).toEqual(expected);
    });

    it('should return null when value is not found', () => {
      const linkedList = new LinkedList();
      linkedList.append('A');
      linkedList.append('B');
      linkedList.append('C');
      linkedList.append('D');
      const actual = linkedList.get('Z');
      const expected = null;
      expect(actual).toEqual(expected);
    });
  });

  describe('has', () => {
    it('should return true if value exists', () => {
      const linkedList = new LinkedList();
      linkedList.append('A');
      linkedList.append('B');
      linkedList.append('C');
      linkedList.append('D');
      expect(linkedList.has('B')).toBe(true);
    });

    it('should return false if value does not exist', () => {
      const linkedList = new LinkedList();
      linkedList.append('A');
      linkedList.append('B');
      linkedList.append('C');
      linkedList.append('D');
      expect(linkedList.has('Z')).toBe(false);
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
      expect(actual).toEqual(expected);
    });

    it('should return -1 when value is not found', () => {
      const linkedList = new LinkedList();
      linkedList.append('apples');
      linkedList.append('oranges');
      linkedList.append('grapes');
      const actual = linkedList.indexOf('pears');
      const expected = -1;
      expect(actual).toEqual(expected);
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
      expect(actual).toEqual(expected);
    });

    it('should return -1 when value is not found', () => {
      const linkedList = new LinkedList();
      linkedList.append('bananas');
      linkedList.append('watermelons');
      linkedList.append('peaches');
      const actual = linkedList.indexOf('blueberries');
      const expected = -1;
      expect(actual).toEqual(expected);
    });
  });

  describe('forEach', () => {
    it('should correctly run a function on each node value', () => {
      const nums = new LinkedList();
      const double = n => n * 2;
      nums.append(1);
      nums.append(2);
      nums.append(3);
      nums.forEach(double);
      const actual = JSON.stringify(nums);
      const expected = '{"head":{"data":2,"next":{"data":4,"next":{"data":6,"next":null}}}}';
      expect(actual).toEqual(expected);
    });

    it('should throw Error when a function is not passed', () => {
      const linkedList = new LinkedList();
      const notAFunction = 'string';
      expect(() => linkedList.forEach(notAFunction)).toThrow();
    });
  });

  describe('map', () => {
    it('should run a function on each node value and return a new Linked List with the correct results', () => {
      const nums = new LinkedList();
      const double = n => n * 2;
      nums.append(1);
      nums.append(2);
      nums.append(3);
      const result = nums.map(double);
      const actual = JSON.stringify(result);
      const expected = '{"head":{"data":2,"next":{"data":4,"next":{"data":6,"next":null}}}}';
      expect(actual).toEqual(expected);
    });

    it('should throw Error when a function is not passed', () => {
      const linkedList = new LinkedList();
      const notAFunction = 'string';
      expect(() => linkedList.map(notAFunction)).toThrow();
    });
  });

  describe('reverseInPlace', () => {
    it('should reverse a list in place', () => {
      const nums = new LinkedList();
      nums.append(1);
      nums.append(2);
      nums.append(3);
      nums.reverseInPlace();
      const actual = JSON.stringify(nums);
      const expected = '{"head":{"data":3,"next":{"data":2,"next":{"data":1,"next":null}}}}';
      expect(actual).toEqual(expected);
    });
  });

  describe('hasCycle', () => {
    it('should return true when list contains a cycle/loop', () => {
      const nums = new LinkedList();
      nums.append(1);
      nums.append(2);
      nums.append(3);
      nums.head.next.next.next = nums.head;
      expect(hasCycle(nums.head)).toBe(true);
    });

    it('should return false when list does not contain cycle', () => {
      const nums = new LinkedList();
      nums.append(1);
      expect(hasCycle(nums.head)).toBe(false);
    });
  });

  describe('reverse', () => {
    it('should return a new reversed list', () => {
      const nums = new LinkedList();
      nums.append(1);
      nums.append(2);
      nums.append(3);
      const reversed = reverse(nums.head);
      const actual = JSON.stringify(reversed);
      const expected = '{"data":3,"next":{"data":2,"next":{"data":1,"next":null}}}';
      expect(actual).toEqual(expected);
    });

    it('should NOT mutate original list', () => {
      const nums = new LinkedList();
      nums.append(1);
      nums.append(2);
      nums.append(3);
      reverse(nums.head);
      const actual = JSON.stringify(nums);
      const expected = '{"head":{"data":1,"next":{"data":2,"next":{"data":3,"next":null}}}}';
      expect(actual).toEqual(expected);
    });
  });
});

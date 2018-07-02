import BinarySearchTree from './BinarySearchTree';
import { expect, assert } from 'chai';

describe('BinarySearchTree', () => {

  describe('constructor', () => {

    it('should return an instance of a Binary Search Tree', () => {

      expect(new BinarySearchTree()).to.be.an.instanceof(BinarySearchTree);

    });

  });

  describe('insert', () => {
    
    it('should insert nodes in the correct order', () => {
    
      const nums = new BinarySearchTree();

      nums.insert(7);
      nums.insert(3);
      nums.insert(11);

      const actual = JSON.stringify(nums);
      const expected = '{"root":{"val":7,"left":{"val":3,"left":null,"right":null},"right":{"val":11,"left":null,"right":null}}}';

      assert.equal(actual, expected);
      
    });

  });

  let nums;
  let result;

  beforeEach(() => {
    nums = new BinarySearchTree();
    result = [];

    nums.insert(7);
    nums.insert(3);
    nums.insert(11);
    nums.insert(1);
    nums.insert(5);
    nums.insert(9);
    nums.insert(13);
    nums.insert(0);
    nums.insert(2);
    nums.insert(4);
    nums.insert(6);
    nums.insert(8);
    nums.insert(10);
    nums.insert(12);
    nums.insert(14);
  });

  describe('inOrder', () => {

    it('should traverse nodes in-order', () => {
      
      nums.inOrder(nums.root, (v) => {
        result.push(v);
      });

      const actual = result.toString();
      const expected = '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14';

      assert.equal(actual, expected);

    });

  });

  describe('preOrder', () => {

    it('should traverse nodes pre-order', () => {
      
      nums.preOrder(nums.root, (v) => {
        result.push(v);
      });

      const actual = result.toString();
      const expected = '7,3,1,0,2,5,4,6,11,9,8,10,13,12,14';

      assert.equal(actual, expected);

    });

  });

  describe('postOrder', () => {

    it('should traverse nodes post-order', () => {

      nums.postOrder(nums.root, (v) => {
        result.push(v);
      });

      const actual = result.toString();
      const expected = '0,2,1,4,6,5,3,8,10,9,12,14,13,11,7';

      assert.equal(actual, expected);

    });
      
  });

  describe('getMin', () => {
    
    it('should return the minimum value', () => {

      const actual = nums.getMin();
      const expected = 0;

      assert.equal(actual, expected);

    });

  });

  describe('getMax', () => {

    it('should return the maximum value', () => {

      const actual = nums.getMax();
      const expected = 14;

      assert.equal(actual, expected);

    });

  });

  describe('find', () => {

    it('should return node containing the passed in value', () => {
      
      const node = nums.find(4);

      const actual = JSON.stringify(node);
      const expected = '{"val":4,"left":null,"right":null}';

      assert.equal(actual, expected);

    });

    it('should return null if value was not found', () => {

      const actual = nums.find(100);
      const expected = null;

      assert.strictEqual(actual, expected);

    });
    
  });

  describe('contains', () => {
  
    it('should return true if value is found', () => {
      
      expect( nums.contains(7) ).to.be.true;

    });

    it('should return false if value is not found', () => {

      expect( nums.contains(-1) ).to.be.false;

    });

  });

});

// TODO
// console.log(printPaths(nums.root)); //=> 7->3->1->0  7->3->1->2  7->3->5->4  7->3->5->6  7->11->9->8  7->11->9->10  7->11->13->12  7->11->13->14
// console.log(sumOfLeftLeaves(nums.root)); //=> 24
// console.log(maxDepth(nums.root)); //=> 4
// const n1 = new Node(1);
// const n2 = new Node(4);
// lowestCommonAncestor(nums.root, n1, n2); //=> 3
// largestValueInEachRow(nums.root);
// const simpleNode = {val: 10, left: {val: 1, left: null, right: null}, right: {val: 2, left: null, right: null}};
// sumTreeValues(simpleNode); //=> 13
// createMinimalBST([1,2,3,4,5,6,7]);
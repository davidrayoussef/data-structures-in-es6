import Graph from './Graph';
import { expect, assert } from 'chai';

describe('Graph', () => {

  describe('constructor', () => {

    it('should return an instance of a Graph', () => {

      expect( new Graph() ).to.be.an.instanceof(Graph);

    });

  });

  describe('addNode', () => {

    it('should add a node to the graph', () => {

      let friends = new Graph();
      friends.addNode('David');

      expect( friends.nodes.hasOwnProperty('David') ).to.be.true;

    });

  });

  describe('addEdge', () => {

    it('should add an edge for two nodes', () => {

      let cities = new Graph();
      cities.addNode('New York City');
      cities.addNode('Jersey City');
      cities.addEdge('New York City', 'Jersey City');

      const nycToJc = cities.nodes['New York City'].some(edge => edge === 'Jersey City');
      const jcToNyc = cities.nodes['Jersey City'].some(edge => edge === 'New York City');

      expect( nycToJc && jcToNyc ).to.be.true;

    });

  });

  describe('removeNode', () => {

    it('should remove a node from the graph', () => {

      let friends = new Graph();
      friends.addNode('David');
      friends.addNode('Gina');
      friends.addNode('Justin');
      friends.addNode('Tina');
      friends.addEdge('David', 'Gina');

      friends.removeNode('David');

      expect( friends.nodes.hasOwnProperty('David') ).to.be.false;

    });

  });

  describe('removeEdge', () => {

    it('should remove an edge for two nodes', () => {

      let cities = new Graph();
      cities.addNode('Los Angeles');
      cities.addNode('San Francisco');
      cities.addEdge('Los Angeles', 'San Francisco');

      const nycToJcConnected = cities.nodes['Los Angeles'].some(edge => edge === 'San Francisco');
      const jcToNycConnected = cities.nodes['San Francisco'].some(edge => edge === 'Los Angeles');
      const connected = nycToJcConnected && jcToNycConnected;

      cities.removeEdge('Los Angeles', 'San Francisco');

      const nycToJcDisconnected = !cities.nodes['Los Angeles'].some(edge => edge === 'San Francisco');
      const jcToNycDisconnected = !cities.nodes['San Francisco'].some(edge => edge === 'Los Angeles');
      const disconnected = nycToJcDisconnected && jcToNycDisconnected;

      expect(connected && disconnected).to.be.true;

    });

  });

  describe('find', () => {

    it('should return the value of a node (an array of its edges)', () => {

      let nums = new Graph();
      nums.addNode('1');
      nums.addNode('2');
      nums.addNode('3');
      nums.addEdge('1', '2');
      nums.addEdge('1', '3');

      const actual = JSON.stringify(nums.find('1'));
      const expected = '["2","3"]';

      assert.equal(actual, expected);

    });

  });

});

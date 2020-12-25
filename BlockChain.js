const sha256 = require('crypto-js/sha256');

class BlockChain {
  chain = [this.createInitialBlock()];

  add(transaction) {
    const newBlock = new Block({
      data: transaction,
      index: this.chain.length,
      previousHash: this.getLatest().hash
    });
    this.chain.push(newBlock);
  }

  getLatest() {
    return this.chain[this.chain.length - 1];
  }

  isValid() {
    return this.chain.every((_, i, a) => {
      const currBlock = a[i];
      const prevBlock = a[i - 1];
      return i === 0
        ? true
        : currBlock.hash === currBlock.getHash() && currBlock.previousHash === prevBlock.hash;
    });
  }

  createInitialBlock() {
    return new Block({ data: 'Initial Block', index: 0 });
  }
}

class Block {
  constructor({ data, index, previousHash = '' }) {
    this.data = data;
    this.index = index;
    this.previousHash = previousHash;
    this.timeStamp = new Date().getTime();
    this.hash = this.getHash();
  }

  getHash() {
    return sha256(
      `${this.index}${this.previousHash}${this.timeStamp}${JSON.stringify(this.data)}`
    ).toString();
  }
}

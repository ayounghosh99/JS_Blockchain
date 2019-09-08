const Blockchain = require('./blockchain');
const myChain = new Blockchain();
myChain.addBlock('Satoshi sent 10 BTC to Ayoun');
myChain.addBlock('Nakamoto sent 10 BTC to Ghosh');
myChain.printChain();

const crypto = require('crypto');
class Block {
constructor(index,timestamp,data,previousHash) {
this.index = index;
this.timestamp = timestamp;
this.data = data;
this.previousHash = previousHash;
this.hash = this. calculateHash();
}
calculateHash() {
const stringToHash = this.index + this.timestamp + this.previousHash + JSON.stringify(this.data);
return crypto.createHash('sha256').update(stringToHash).digest('hex');
}
}
module.exports = Block;

const { GENESIS_DATA } = require("./config");
class Block{
    constructor({data,hash,lastHash,timestamp}){
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
        this.timestamp = timestamp;
    }
    static genesis(){
      return  new this(GENESIS_DATA)
    }
};

module.exports = Block;
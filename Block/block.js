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
    };
    static mineBlock({lastBlock,data}){
      return new this({
        timestamp:Date.now,
        lastHash:lastBlock.hash,
        data
      })
    };
};


module.exports = Block;
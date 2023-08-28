const Block = require("../Block/block");
const cryptoHash = require("../CryptoHash/cryptoHash");
class Blockchain{
constructor(){
    this.chain = [Block.genesis()];
}
addBlock({data}){
   const newBlock = Block.mineBlock({
        lastBlock: this.chain[this.chain.length-1],
        data
    });
    this.chain.push(newBlock);
};

static isValidChain(chain){
    if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())){
      return false;
    }

    for(let i =1; i<chain.length; i++){
      const block = chain[i];
      const actualLastHash = chain[i-1].hash;

      const {timestamp, lastHash, hash, data } = block;

      if(lastHash !== actualLastHash ) return false;
      if(hash !== cryptoHash(timestamp, lastHash, data)) return false;
    }

    return true;
  }

  replaceChain(chain){

    if(chain.length <= this.chain.length){
      console.error("the incoming chain must be longer");
     return;
    }
    else if(!Blockchain.isValidChain(chain)){

      console.error("the incoming chain must be valid");
      return;

    }

    else{
      console.log(`replace chain with: ${chain}`);
    this.chain = chain;
    }
  }
  
}

module.exports = Blockchain;
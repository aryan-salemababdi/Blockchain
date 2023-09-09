const {STARTING_BALANCE} = require("../Block/config");
const {ec} = require("../util");
const cryptoHash = require("../CryptoHash/cryptoHash");


class Wallet {

    constructor() {
            this.balance = STARTING_BALANCE;
            this.keyPair = ec.genKeyPair();
            this.publicKey = this.keyPair.getPublic().encode("hex");
    }

    sign(data) {
            return this.keyPair.sign(cryptoHash(data));
    }

}

module.exports = Wallet;
const cryptoHash = require("../CryptoHash/cryptoHash");

const EC = require("elliptic").ec;


const ec = new EC("secp256k1");

const verifySignatrue = ({publicKey, data, signatrue}) => {

    const keyFromPublic = ec.keyFromPublic(publicKey, "hex");

    return keyFromPublic.verify(cryptoHash(data), signatrue);

}

module.exports = {ec, verifySignatrue};
const Wallet = require("./index");
const {verifySignatrue} = require("../util");

describe("wallet", ()=> {

    let wallet;

    beforeEach(()=> {
        wallet = new Wallet();
    });

    it("has a `balence" , ()=>{
        expect(wallet).toHaveProperty("balance")
    });
    it("has a `publicKey` ", ()=>{
            expect(wallet).toHaveProperty("publicKey")
    });

    describe("signin data", ()=>{
        
        const data = "some-data";

        it("verifies a signature", ()=>{
            expect(verifySignatrue({
                publicKey: wallet.publicKey,
                data,
                signatrue: wallet.sign(data),
            })).toBe(true);
        })
        it("dose not verifies a signature", ()=>{
            expect(verifySignatrue({
                publicKey: wallet.publicKey,
                data,
                signatrue: new Wallet().sign(data),
            })).toBe(false);
        })

    });

})
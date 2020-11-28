/*

The public version of the file used for testing can be found here: https://gist.github.com/ConsenSys-Academy/ce47850a8e2cba6ef366625b665c7fba

This test file has been updated for Truffle version 5.0. If your tests are failing, make sure that you are
using Truffle version 5.0. You can check this by running "trufffle version"  in the terminal. If version 5 is not
installed, you can uninstall the existing version with `npm uninstall -g truffle` and install the latest version (5.0)
with `npm install -g truffle`.

(not edited)

*/
let catchRevert = require("./exceptionsHelpers.js").catchRevert

let TokenContract = artifacts.require("./BootcampToken.sol");
const BigNumber = web3.BigNumber;
  
contract("BootcampToken", function([_, owner, investor]) {
    let token;
    const _name = "BootcampToken";
    const _symbol = "BT";
    const _decimals = 18;
    const _total_supply = 20000000;
    //const _total_supply = new BigNumber(1000000);
    //const _over_total_supply = new BigNumber(1100000000000000000000000);
    
    beforeEach(async function() {
    token = await TokenContract.new(_name, _symbol, _decimals, _total_supply, {
    from: owner
    });
    });


    it("has a name", async function() {
    (await token.name()).should.eq(_name);
    });

    it("has a symbol", async function() {
    (await token.symbol()).should.eq(_symbol);
    });
    
    it("has 18 decimals", async function() {
    (await token.decimals()).should.be.bignumber.equal(_decimals);
    });
    
    it(
    "has " + String(1000000000000000000000000) + " total supply",
    async function() {
    (await token.totalSupply()).should.be.bignumber.equal(1000000000000000000000000);
    }
    );
  
    it("assigns the initial total supply to the creator", async function() {
    const totalSupply = await token.totalSupply();
    const ownerBalance = await token.balanceOf(owner);
    ownerBalance.should.be.bignumber.equal(totalSupply);
    });
  
    it("transfer token to the investor", async function() {
    await token.transfer(investor, 1000, { from: owner });
    const investorBalance = await token.balanceOf(investor);
    investorBalance.should.be.bignumber.equal(1000);
    });
  
    it("transfer token to the investor", async function() {
    await token.transfer(investor, 1000, { from: owner });
    const investorBalance = await token.balanceOf(investor);
    investorBalance.should.be.bignumber.equal(1000);
    });
  
    it("should reject transfer token(more than has) to the investor", async function() {
    await expectThrow(
    token.transfer(investor, _over_total_supply, { from: owner }),
    EVMRevert
    );
    });
  
  });
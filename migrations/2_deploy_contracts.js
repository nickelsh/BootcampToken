const SSToken = artifacts.require("SSToken");

module.exports = function(deployer) {
  deployer.deploy(SSToken);
};
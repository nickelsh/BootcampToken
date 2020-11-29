const BootcampToken = artifacts.require("BootcampToken");

module.exports = function(deployer) {
  deployer.deploy(BootcampToken);
};
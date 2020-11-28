# BootcampToken
Final project for Consensys 2020 Dev Bootcamp

## Overview
This is an attempt to simplify the learning process of deploying an ERC-20 token for beginners. 

## Directory Structure
📦 BootcampToken
 ┣ 📂 .git
 ┣ 📂 build (Recent build of the Smart Contracts)
 ┣ 📂 contract (Token generation Smart Contract)
 ┣ 📂 migrations (Truffle migration scripts)
 ┣ 📂 test (Test scripts)
 ┣ 📜 avoiding_common_attacks.md
 ┣ 📜 design-decisions.md
 ┣ 📜 package.json (project dependencies)
 ┣ 📜 README.md (Project Documentation)
 ┗ 📜 truffle-config.js (Truffle Project Config)

## Running the project
1. Install dependencies (nodeJS, truffle, visualstudiocode, ganache-cli, metamask, githubdesktop)
2. Clone this repo on your local machine
3. Create a new metamask address and deposit some Eth into it (Can get it from a faucet : https://faucet.metamask.io/)
4. Follow the instructions from comments in the Smart Contract, truffle-config.js and 2_deploy_contracts.js
5. Run `ganache-cli` and `truffle tests` to check if your smart contract behaves well on localhost
6. You are now ready to deploy your own ERC20 Token on Ethereum Testnet

## Avoiding Common Attacks
Documented here 👉 [avoiding_common_attacks.md](avoiding_common_attacks.md)

## Deployed Addresses
### Ropsten
0x99F147578Bfc3F59363408b7bDe09f4cc025097c

## Design Decisions

### Restricted Access
Used require() 

### Ownership
The smart contract makes msg.sender the owner

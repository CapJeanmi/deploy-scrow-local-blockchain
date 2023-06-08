require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

// Fill in your .env file your wallet private key and testnet rpc url

module.exports = {
  solidity: "0.8.17",
  // networks: {
  //   sepolia: {
  //     url: process.env.SEPOLIA_TESTNET_RPC_URL,
  //     accounts: [process.env.WALLET_TESTNET_PRIVATE_KEY]
  //   }
  // },
  paths: {
    artifacts: "./app/src/artifacts",
  }
};

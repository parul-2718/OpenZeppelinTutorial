/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 const { alchemyApiKey, mnemonic } = require('./secrets.json');
 require('@nomiclabs/hardhat-ethers');
 require("@nomiclabs/hardhat-waffle");
 require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
module.exports = {
  solidity: "0.8.4",

  networks: {
         rinkeby: {
          url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
           accounts: { mnemonic: mnemonic },
         },
       },
};

//https://eth-ropsten.alchemyapi.io/v2/sVj93HHnBOWjDEg-K0cIOpcPa0V-1gva

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/faWbVPAyR9fu8ALR4PDFJGttIix8V_rl',
      accounts: ['1b48ce9be31a88ed9b80559f450de21958747917a347022c034adc7a0a4edd10'],
    },
  },
};

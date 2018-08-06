const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {
  interface,
  bytecode
} = require('./compile');

const provider = new HDWalletProvider(
  'buddy segment curious worth delay spy ethics please anger fluid parade depth',
  'https://rinkeby.infura.io/v3/9d8b79f79fdc44a68733bd4489a49733'
)
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: '0x' + bytecode
    })
    .send({
      gas: '1000000',
      from: accounts[0]
    })

  console.log(interface);
  console.log('Contract deployed to', result.options.address);
}

deploy()
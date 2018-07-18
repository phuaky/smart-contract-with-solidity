const assert = require('assert'); //node module - make assertion of tests - to make sure 1 value = another
const ganache = require('ganache-cli'); //local ethereum test network
const Web3 = require ('web3'); // constructor - create instances of Web3 library
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
    accounts = await web3.eth.getAccounts()

  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ from: accounts[0], gas: '1000000' })
  })

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);

    }) 
})
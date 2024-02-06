const { Web3 } =  require('web3');
const ganacheUrl = 'http://localhost:7545';
const httpProvider = new Web3.providers.HttpProvider(ganacheUrl);
const web3 = new Web3(httpProvider);
async function main() {
  try {
    // Get the current block number from the network
    const currentBlockNumber = await web3.eth.getBlockNumber();
    console.log('Current block number:', currentBlockNumber);

    // Get the list of accounts in the connected node (e.g., Ganache)
    const accounts = await web3.eth.getAccounts();

    // Send a transaction to the network and wait for the transaction to be mined.
    // Note that sending a transaction with Ganache will cause it, in its default configuration, to min a new block.
    const transactionReceipt = await web3.eth.sendTransaction({
      from: accounts[0],
      to: accounts[1],
      value: web3.utils.toWei('0.001', 'ether'),
    });
    console.log('Transaction Receipt:', transactionReceipt);

    // Get the updated block number
    const updatedBlockNumber = await web3.eth.getBlockNumber();
    console.log('Updated block number:', updatedBlockNumber);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
async function balance()
{
   const accounts = await web3.eth.getAccounts()
   const balance = await web3.eth.getBalance(accounts[0]) 
   const balance2 = await web3.eth.getBalance(accounts[1])
   console.log("available balance is"+balance);
   console.log("available balance is"+balance2);
}
async function gas_price()
{
  const gp = await web3.eth.getGasPrice()
  console.log(gp);
}

async function est() {
  const transaction = {
    from:'0x4Ec6586C290A8D7AE29B0d7b89B37D75D62C0896',
    to:'0xee30A694E4fC9DcC6140F3AE28C416EE2092eeEc',
    value:'0x2'
  }
  await web3.eth.estimateGas(transaction).then(console.log)
}
est()
main();
balance()
gas_price()

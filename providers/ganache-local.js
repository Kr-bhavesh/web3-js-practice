const { Web3 } =  require('web3');
const ganacheUrl = 'http://localhost:7545';
const httpProvider = new Web3.providers.HttpProvider(ganacheUrl);
const web3 = new Web3(httpProvider);
async function main() {
  try {
    const currentBlockNumber = await web3.eth.getBlockNumber();
    console.log('Current block number:', currentBlockNumber);

    // Get the list of accounts in the connected node (e.g., Ganache)
    const accounts = await web3.eth.getAccounts();

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
   await web3.eth.getBlockTransactionCount("0x73954C3b4E5BE2bc376786837c71723a0E8E422D").then(console.log)
   await web3.eth.getBlockUncleCount("0x73954C3b4E5BE2bc376786837c71723a0E8E422D").then(console.log)
   await web3.eth.getChainId().then(console.log)
   await web3.eth.getCode("0xF1e05B2f2913561Ae771C2D1653F68fC387753CF").then(console.log)
   await web3.eth.getProtocolVersion().then(console.log)
   await web3.eth.getStorageAt("0xF1e05B2f2913561Ae771C2D1653F68fC387753CF",0).then(console.log)
  //  await web3.eth.getPendingTransactions().then(console.log);
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
// est()
main();
// balance()
// gas_price()

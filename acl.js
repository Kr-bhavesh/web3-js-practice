const { log } = require('console');
const {Web3} = require('web3');
require('dotenv').config()

const web3 = new Web3(process.env.INFURA_URL);

async function test() {
  const private_key = process.env.PRIVATE_KEY;
  const account = web3.eth.accounts.wallet.add(private_key).get(0);
  const transaction = {
    from: account.address,
    to: '0x5b04BD7282eCe11E45f69B3376200d753275b215',

  };
  const { accessList } = await web3.eth.createAccessList(transaction, 'latest');

  console.log('AccessList:', accessList);

  // create transaction object with accessList
  const tx = {
    from: account.address,
    to: '0x5b04BD7282eCe11E45f69B3376200d753275b215',
    value:'0x0',
    gasLimit: BigInt(2100),
    type: BigInt(2), // <- specify type
    accessList,
  };
  console.log(web3.eth.estimateGas(tx));

  // send transaction
  // const receipt = await web3.eth.sendTransaction(tx);

  // console.log('Receipt:', receipt);
}
(async () => {
  await test();
})();
const { Web3 } = require('web3')
const web3 = new Web3('wss://mainnet.infura.io/ws/v3/716bdb39b2f84516b3cedcfb3c2d2c19')
async function main()
{
    const blck_number = await web3.eth.getBlockNumber();
    console.log("block number is"+blck_number);

}
main()
require('dotenv').config({path:'/home/bhavesh/Documents/web3-js/.env'})
const { Web3 } = require('web3');
const web3 = new Web3(process.env.INFURA_URL);
async function main(){
    const blck_number = await web3.eth.getBlockNumber();
    console.log("block number is"+blck_number);

}
main()
require('dotenv').config({path:'/home/bhavesh/Documents/web3-js/.env'})
const {Web3} = require('web3')
const web3 = new Web3(process.env.INFURA_URL)
async function web3_eth_methods(){
    web3.eth.getChainId().then(console.log)
    await web3.eth.getBlockUncleCount("45901328").then(console.log)
    web3.eth.getBlockTransactionCount("45901328").then(console.log)
    web3.eth.getTransaction("0xe0a028d5dae9f00edba9d3dc69341af5227a37e74ec12053561dd753138e2d32").then(console.log)
    web3.eth.getTransactionReceipt("0xe0a028d5dae9f00edba9d3dc69341af5227a37e74ec12053561dd753138e2d32").then(console.log)
    web3.eth.isMining().then(console.log)
    web3.eth.isSyncing().then(console.log)
}
web3_eth_methods()
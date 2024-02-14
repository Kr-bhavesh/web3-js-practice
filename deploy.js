require('dotenv').config()
const {Web3} = require('web3')
const web3 = new Web3('https://polygon-mumbai.infura.io/v3/716bdb39b2f84516b3cedcfb3c2d2c19')
const PRIVATE_KEY = process.env.PRIVATE_KEY
const my_account = web3.eth.wallet.add(PRIVATE_KEY)
my_account.address
async function gbl(){
    console.log(await web3.eth.getBalance(my_account.address));
}
gbl();
require('dotenv').config({path:'/home/bhavesh/Documents/web3-js/.env'});
const {Web3} = require('web3');
const web3 = new Web3('https://polygon-mumbai.infura.io/v3/716bdb39b2f84516b3cedcfb3c2d2c19');
const private_key = process.env.PRIVATE_KEY;
const account = web3.eth.accounts.wallet.add(private_key).get(0);
async function blnc(){
console.log(await web3.eth.getBalance(account.address));
}
// blnc()

async function sign_tx() {
    const signed_tx= await account.signTransaction({
    from:account.address,
    to:'0x302f15922b12C7E82C1D4eCFbf3aEC5054A4e1b7',
    value:'0x0',
    gasPrice: await web3.eth.estimateGas()
   })
   const tx_rcpt = await web3.eth.sendSignedTransaction(signed_tx.rawTransaction)
   console.log(tx_rcpt);
}
sign_tx()



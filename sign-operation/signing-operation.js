require('dotenv').config({path:'./'})
console.log();
const {create} = require('web3-eth-accounts');
const {Web3} = require('web3')
const web3 = new Web3(process.env.GANACHE_URL)
const my_account = web3.eth.accounts.privateKeyToAccount('0xb0531725d9a26e8cc7e4442299796d23f3532c59db02f9dfb66875b05a12e526')
const account = create()
const account_2 = web3.eth.accounts.wallet.create(1);
const message = web3.utils.stringToHex('using wallet')
async function message_sign()
{
        const sign_message = await web3.eth.sign(message,account_2[0].address)
        console.log(sign_message);
}
// message_sign()//signs message using wallet
// console.log(account.sign("Hey there"));//signs data with account
async function sign_transaction(){
    const sign_transact = await my_account.signTransaction(
        {
            from:my_account.address,
            to:'0xee30A694E4fC9DcC6140F3AE28C416EE2092eeEc',
            value:'0x1',
            gas:'21000',
            gasPrice:await web3.eth.getGasPrice()
        }
    )
    console.log(sign_transact);
}
// sign_transaction() //signs a transaction
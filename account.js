const {Web3} = require('web3')
const web3 = new Web3('http://127.0.0.1:7545');
const trnf_wallet = web3.eth.accounts.wallet.add('0x27c0922f6032fc24c8671358704fa387e329058e355ee476c73f3d9837ab308d')
const account = web3.eth.accounts.create();
const wallet = web3.eth.accounts.wallet.create(1);
const _to = '0xE9E7A884b048CEbCf8F149f181457891eD6729Cb'
const _amount = '1'
async function send_eth(){
     const receipt = await web3.eth.sendTransaction({
        from:trnf_wallet[0].address,
        to:_to,
        value:_amount
     })
    console.log(receipt);
}
// send_eth()
// console.log(account);
// console.log(wallet);
const my_contract = new web3.eth.Contract(ABI,CONTRACT_ADDRESS);
(async function transfer(){
    const transaction_receipt = await my_contract.methods.doSomething().send({from:trnf_wallet[0]})
    console.log(transaction_receipt);
})()

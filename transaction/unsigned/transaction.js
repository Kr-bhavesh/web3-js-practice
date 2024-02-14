const {Web3} = require('web3')
const web3 = new Web3('http://localhost:7545')
async function send_tx()
{
    tx_info={
        from:'0x41AA884Dc4e658B9bdCB370871B36AfEE3487391',
        to:'0x6f59E82DFa2999fA67D6999742dDC42B29b3C2f3',
        value:20,
        gas:'21000'
    }
    const tx_receipt = await web3.eth.sendTransaction(tx_info)
    console.log(tx_receipt);
}
send_tx();

const {Web3} = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/716bdb39b2f84516b3cedcfb3c2d2c19');
const account = web3.eth.accounts.create();//creating account 
console.log(account);
private_key=account.privateKey 
const wallet = web3.eth.accounts.wallet.add(private_key); //adding private key of the previously created account and creating wallet
console.log(wallet);



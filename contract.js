const { Web3 } = require("web3");
// const { abi } = require('web3/lib/commonjs/eth.exports');
const web3 = new Web3('http://127.0.0.1:7545');
const abi = require('./MyContractAbi.json');
const adress =  '0xF1e05B2f2913561Ae771C2D1653F68fC387753CF'
var myContract = new web3.eth.Contract(abi,adress)
myContract.handleRevert=true
async function interact(){
	const providersAccounts = await web3.eth.getAccounts();
	const defaultAccount = providersAccounts[0];

	try {
		// Get the current value of my number
		const myNumber = await myContract.methods.myNumber().call();
		console.log('my number value: ' + myNumber);

		// Increment my number
		const receipt = await myContract.methods.setMyNumber(BigInt(myNumber) + 1n).send({
			from: defaultAccount,
			gas: 1000000,
			gasPrice: '10000000000',
		});
		console.log('Transaction Hash: ' + receipt.transactionHash);

		// Get the updated value of my number
		const myNumberUpdated = await myContract.methods.myNumber().call();
		console.log('my number updated value: ' + myNumberUpdated);
	} catch (error) {
		console.error(error);
	}
}

interact();
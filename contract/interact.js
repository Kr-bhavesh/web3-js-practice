require('dotenv').config()
const { Web3 } = require('web3');
const fs = require('fs');
const path = require('path');
const abi = require('./MyContractAbi.json');
const infra_url = process.env.INFURA_URL
// Set up a connection to the Ethereum network
const web3= new Web3(infra_url);

// Read the contract address from the file system
const deployedAddressPath = path.join(__dirname, 'MyContractAddress.bin');
const deployedAddress = fs.readFileSync(deployedAddressPath, 'utf8');

// Read the bytecode from the file system
const bytecodePath = path.join(__dirname, 'MyContractBytecode.bin');
const bytecode = fs.readFileSync(bytecodePath, 'utf8');

// Create a new contract object using the ABI and bytecode
const myContract = new web3.eth.Contract(abi, deployedAddress);
myContract.handleRevert = true;

async function interact() {
	const private_key = process.env.PRIVATE_KEY;
    const account = web3.eth.accounts.wallet.add(private_key).get(0);
	try {
		// Get the current value of my number
		const myNumber = await myContract.methods.myNumber().call();
		console.log('my number value: ' + myNumber);

		// Increment my number
		const receipt = await myContract.methods.setMyNumber(BigInt(myNumber) + 1n).send({
			from: account.address,
			// gas: 1000000,
			gasPrice: '10000000000',
		});
		console.log('Transaction Hash:' + receipt.transactionHash);

		// Get the updated value of my number
		const myNumberUpdated = await myContract.methods.myNumber().call();
		console.log('my number updated value: ' + myNumberUpdated);
	} catch (error) {
		console.error(error);
	}
}

interact();
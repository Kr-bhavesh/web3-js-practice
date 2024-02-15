require('dotenv').config()
const INFURA_URL = process.env.INFURA_URL
const {Web3} = require('web3')
const web3 = new Web3(INFURA_URL)
const fs = require('fs');
const path = require('path');
const private_key = process.env.PRIVATE_KEY;
const account = web3.eth.accounts.wallet.add(private_key).get(0);
const bytecodePath= path.join(__dirname, 'MyContractBytecode.bin');
const bytecode= fs.readFileSync(bytecodePath, 'utf8');
const abi = require('./MyContractAbi.json');
const myContract = new web3.eth.Contract(abi);
myContract.handleRevert = true;

async function deploy(){
	const contractDeployer = myContract.deploy({
		data: '0x' + bytecode,
		arguments: [1],
	});

	try {
		const tx= await contractDeployer.send({
			from: account.address,
			gas: '1000000',
			gasPrice: '10000000000'
		});
		console.log('Contract deployed at address: ' + tx.options.address);

		const deployedAddressPath = path.join(__dirname, 'MyContractAddress.bin');
		fs.writeFileSync(deployedAddressPath, tx.options.address);
	} catch (error) {
		console.error(error);
	}
}

deploy();
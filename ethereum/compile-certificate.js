// const path = require("path");
// const fs = require("fs");
// const solc = require("solc");

// const certificatePath = path.resolve(__dirname, "contracts", "Certificate.sol");
// const source = fs.readFileSync(certificatePath, "utf8");

// console.log(certificatePath);
// console.log(source);

// module.exports = solc.compile(source, 1).contracts[":Certificate"];
// console.log(module.exports);



const path = require('path');
const fs = require('fs');
const solc = require('solc');

const certificatePath = path.resolve(__dirname, "contracts", "Certificate.sol");
const source = fs.readFileSync(certificatePath, 'utf-8');

var input = {
    language: 'Solidity',
    sources: {
        'Certificate.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}; 
console.log(input);

console.log(solc.compile(JSON.stringify(input)));

const output = JSON.parse(solc.compile(JSON.stringify(input)));

const interface = output.contracts['Certificate.sol'].Certificate.abi;
const bytecode = output.contracts['Certificate.sol'].Certificate.evm.bytecode.object;

module.exports = {
    interface,
    bytecode,
};

console.log(module.exports);

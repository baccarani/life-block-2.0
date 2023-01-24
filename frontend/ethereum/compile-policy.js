const path = require("path");
const fs = require("fs");
const solc = require("solc");

const policyPath = path.resolve(__dirname, "contracts", "Policy.sol");
const source = fs.readFileSync(policyPath, "utf8");

console.log(module.exports = solc.compile(source, 1).contracts[":Policy"]);

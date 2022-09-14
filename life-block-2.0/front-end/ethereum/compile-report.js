const path = require("path");
const fs = require("fs");
const solc = require("solc");

const reportPath = path.resolve(__dirname, "contracts", "Report.sol");
const source = fs.readFileSync(reportPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":Report"];

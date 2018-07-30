const path = require('path'); //use path from Node
const fs = require('fs'); //use file system from node
const solc = require('solc'); //use solc library installed on node earlier

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); //draw the path to the file inbox.sol
const source = fs.readFileSync(inboxPath, 'utf8'); //use the right encoding to read the file

module.exports = solc.compile(source, 1).contracts[':Inbox'];

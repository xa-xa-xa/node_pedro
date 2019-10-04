const fs = require('fs');
const readStream = fs.createReadStream('./pipeExampleText.txt', 'utf8');
const writeStream = fs.createWriteStream('pipeExampleText2.txt');

// readStream.on('data', chunk => writeStream.write(chunk));
/*
 * or
 */
// readStream.pipe(writeStream);
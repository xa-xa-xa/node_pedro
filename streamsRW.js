/**
 * Working with Readable and Writable Data Streams
 */

const fs = require('fs');
//
// const readStream = fs.createReadStream('./lorem.txt', 'utf8');
// const writeStream = fs.createWriteStream('./largeLorem.txt');
// readStream.on('data', chunk => {
//   writeStream.write(chunk);
// });

/*
 * READ w/o steams and chunks
 */
// fs.readFile('largeLorem.txt', 'utf-8', (err, file) => {
//   if (err) console.error();
//   else {
//     console.log('reading the file: ', file);
//   }
// });

/*
 * READ Stream with CHUNKS
 */
const readStream = fs.createReadStream('./largeLorem.txt', 'utf8');
readStream.on('data', chunk => console.log(chunk));

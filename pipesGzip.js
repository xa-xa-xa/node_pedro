const fs = require('fs');
const zlib = require('zlib')
const gzip = zlib.createGzip()
const readStream = fs.createReadStream('./largeLorem.txt', 'utf8')
const writeStream = fs.createWriteStream('largeLoremGzipped.txt.gz')

/*
 * Chaining of PIPES
 */

// readStream.pipe(gzip).pipe(writeStream);

/*
 * Chaining UnZip
 */
const gunzip = zlib.createGunzip()
const readStreamUnzip = fs.createReadStream('./pipeExampleText2.txt.gz')
const writeStreamUnzip = fs.createWriteStream('./unzippedPipeExampleText2.txt')

readStreamUnzip.pipe(gunzip)
    .pipe(writeStreamUnzip);
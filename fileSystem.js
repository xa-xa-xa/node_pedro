// const tutorial = require('./tutorial');
// console.log(tutorial(2, 3))

/*
 * File System Module
 */
const fs = require('fs');

fs.readFile('largeLorem.txt', 'utf-8', (err, file) => {
  if (err) console.error();
  else {
    console.log('reading the file: ', file);
  }
});
/*
 * Create a file
 */
// fs.writeFile('newFile.md', "This is an example of creation of a file.", err => {
//     err ? console.error(err) :
//         console.log('Success: File was created.')
//     // reading a file
//     fs.readFile('newFile.md', 'utf-8', (err, file) => {
//         if (err) console.error()
//         else {
//             console.log("reading the file: ", file)
//         }
//     })
// });

/*
 * Rename method
 */
// fs.rename('newFile.md', 'newerFile.md', (err) => {
//     if (err) console.log(err)
//     else console.log('success! file was renamed!')
// })

/*
 * Appending data to a file
 */

// fs.appendFile('newerFile.md', '\nNEW appended data...', (err) => {
//     if (err) console.log(err)
//     else console.log('success! new data been appended')
// });

/*
 * Deleting a file
 */
// fs.unlink('newerFile.md', (err, file) => err ? console.log(err) : console.log('success! file was deleted'))

/*
 * Create Directory
 */
// fs.mkdir('tutorial', (err) =>
//     err ?
//     console.log(err) :
//     console.log('success: folder been created')
// );

/*
 * Remove Directory
 */
// fs.rmdir('tutorial', (err) =>
//     err ?
//     console.log(err) :
//     console.log('success: folder been deleted')
// );

/*
 * Create File Within Directory
 */
// fs.mkdir('tutorial', (err) => {
//     if (err) console.log(err)
//     else {
//         fs.writeFile('./tutorial/insideFolder.txt', "example text to be written in the file", err => {
//             if (err) console.log(err)
//             else {
//                 console.log('success: the file has been written in inside tutorial folder ')
//             }
//         })
//     }
// });

/*
 * Delete Folder With File
 */
// { [Error: ENOTEMPTY: directory not empty, rmdir 'tutorial']
//   errno: -66,
//   code: 'ENOTEMPTY',
//   syscall: 'rmdir',
//   path: 'tutorial' }

// fs.unlink('./tutorial/insideFolder.txt', err => {
//     if (err) console.log(err)
//     else {
//         fs.rmdir('tutorial', (err) => {
//             if (err) console.log(err)
//             else {

//                 console.log('success: folder been deleted')
//             }
//         });
//     }
// });

/*
 * Delete Folder With Multiple Files In It
 */

// fs.readdir('./deleteMultiFilesFolder/', (err, files) => {
//     if (err) console.log(err)
//     else {
//         console.log(files)
//         for (let file of files) { // loop through all files in the directory
//             fs.unlink('./deleteMultiFilesFolder/' + file, err => {
//                 if (err) console.log(err)
//                 else {
//                     console.log('successfully deleted file: ' + file)
//                 }
//             })
//         }
//     }
// })

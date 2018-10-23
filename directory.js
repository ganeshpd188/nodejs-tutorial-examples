var fs=require('fs');
//deleting a file
fs.unlink('writeMe.txt');

// making a directory
fs.mkdirSync('stuff');

//removing a directory

fs.rmdirSync('Stuff');

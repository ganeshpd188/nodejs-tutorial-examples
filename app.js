var fs = require('fs');
//read the file
var readMe = fs.readFileSync('./read.txt', 'utf8');

console.log(readMe);

// write to the read
//creates a new file writeMe.txt and write the contents of readMe into it
fs.writeFileSync('writeMe.txt',readMe);
//or
//fs.writeFileSync('writeMe.txt',' Something else is also written');

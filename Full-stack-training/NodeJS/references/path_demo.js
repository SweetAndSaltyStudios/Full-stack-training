const path = require('path');

// Base file name
console.log('Base file name: ');
console.log(path.basename(__filename));
console.log('----------------');

// Directory name
console.log(' Directory name: ');
console.log(path.dirname(__filename));
console.log('----------------');

// File extension
console.log('File extension: ');
console.log(path.extname(__filename));
console.log('----------------');

// Create path object
console.log('Create path object: ');
console.log(path.parse(__filename).base);
console.log('----------------');


// Concatenate paths
console.log('Concatenate paths: ');
console.log(path.join(__dirname, 'test', 'hello.html'));
console.log('----------------');
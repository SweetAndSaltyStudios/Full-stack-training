const os = require('os');

// Platform
console.log('Platform: ');
console.log(os.platform());
console.log('-----------');

// CPU Arch
console.log('CPU Arch: ');
console.log(os.arch());
console.log('-----------');

// CPU Core Info
console.log('CPU Core Info: ');
console.log(os.cpus());
console.log('-----------');


// Free Memory
console.log('Free Memory: ');
console.log(os.freemem());
console.log('-----------');


// Total Free Memory
console.log('Free Memory: ');
console.log(os.totalmem());
console.log('-----------');

// Home Directory
console.log('Home Directory: ');
console.log(os.homedir());
console.log('-----------');

// Uptime
console.log('Uptime: ');
console.log(os.uptime());
console.log('-----------');

const http = require('http');

// Create server object
http.createServer((reguest, response) => 
{
    // Write response
    response.write('Hello World');
    response.end();
}).listen(3000, () => console.log('Server running...'));


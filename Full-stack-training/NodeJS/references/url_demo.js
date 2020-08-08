const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log('Serialized URL: ');
console.log(myUrl.href);
console.log(myUrl.toString());
console.log('-----------');

// Host (root domain)
console.log('Host (root domain): ');
console.log(myUrl.host);
console.log('-----------');

// Hostname (does not get port)
console.log('Hostname: ');
console.log(myUrl.hostname);
console.log('-----------');

// Pathname 
console.log('Pathname: ');
console.log(myUrl.pathname);
console.log('-----------');

// Selialized query 
console.log('Selialized query: ');
console.log(myUrl.search);
console.log('-----------');

// Params object 
console.log('Params object: ');
console.log(myUrl.searchParams);
console.log('-----------');

// Add param 
console.log('Add param: ');
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
console.log('-----------');

// Loop through params
console.log('Loop through params');
myUrl.searchParams.forEach((value, name) => 
{
    console.log(`${name} : ${value}`);
});
console.log('-----------');
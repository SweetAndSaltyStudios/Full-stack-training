const EventEmmiter = require('events');

// Create class
class MyEmmiter extends EventEmmiter { }

// init object
const myEmmiter = new MyEmmiter();

// Add event listener
myEmmiter.on('event', function()
{
    console.log('Event Invoked!');
});

// Invoke event
myEmmiter.emit('event');
myEmmiter.emit('event');
myEmmiter.emit('event');
myEmmiter.emit('event');

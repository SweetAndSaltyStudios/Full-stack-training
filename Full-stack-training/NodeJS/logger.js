const EventEmmiter = require('events');
const uuid = require('uuid');

// console.log(`uuid-v4: ${uuid.v4()}`);

class Logger extends EventEmmiter
{
    log(message)
    {
        // Invoke event
        this.emit('message', 
        {
            id: uuid.v4(), message : message
        });
    }
}

// module.exports = Logger;

const newLogger = new Logger(); 

newLogger.on('message', (data) => 
{
    console.log('Called Listener: ', data);
});

newLogger.log('Hello!');
newLogger.log('World!');
newLogger.log('Hello World!');
const http = require('http');
const path = require('path');
const file_system = require('fs');

const server = http.createServer((request, response) => 
{
    // SimpleExample(request.url, response);

    //Build file path
    let file_path = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url);
    
    //Extension of file
    let extname = path.extname(file_path);

    //Initial content type
    let content_type = 'text/html';

    //Check ext and content type
    switch(extname)
    {
        case '.js':
            content_type = 'text/javascript';
        break;

        case '.css':
            content_type = 'text/css';
        break;

        case '.json':
            content_type = 'text/json';
        break;

        case '.png':
            content_type = 'text/png';
        break;

        case '.jpg':
            content_type = 'text/jpg';
        break;

        default:

        break;
    }

    //Read file
    file_system.readFile(file_path, (error, content) => 
    {
        if(error)
        {
            if(error.code == 'ENOENT') 
            {
                //Page not found
                file_system.readFile(path.join(__dirname, 'public', '404.html'),
                (error, content) =>
                {
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(content, 'utf8');
                });
            }
            else
            {
                //Some server error
                response.writeHead(500, {'Content-Type': 'text/html'});
                response.end(`Server Error: ${error.code}`);
            }
        }
        else
        {
            //Success
            response.writeHead(200, {'Content-Type': content_type});
            response.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
{
    console.log(`Server running on port ${PORT}`);
});

function SimpleExample(url, response)
{
    switch(url)
    {
        case '/':

        file_system.readFile(path.join(__dirname, 'public', 'index.html'), (error, content) => 
        {
            if(error) throw error;

            response.writeHead(200, 
            {
                'Content-Type': 'text/html'
            });
    
            response.end(content);

        });

        break;

        case '/api/users':

        file_system.readFile(path.join(__dirname, 'public', 'about.html'), (error, content) => 
        {
            const users = [
                { name: 'Bob, Quick', age: 55},
                { name: 'Mathias Mustonen', age : 29},
                { name: 'Max Conrad', age : 17}
            ];

            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify(users));
        });

        break;
    }
}


const fs = require('fs');
const path = require('path');

const folder_name = 'test_folder';
const folder_create_path = path.join(__dirname, `/${folder_name}`);

// Create folder
fs.mkdir(folder_create_path, {}, function(error)
{
    if(error) throw error;

    console.log(`Folder: ${folder_name} created!`);
});

const file_name = 'hello.txt';
const file_content_text = 'Hello World!';
const file_create_path = path.join(folder_create_path, file_name);

const callback_text = "this is callback!";

// Create and write to file
fs.writeFile(
file_create_path, 
file_content_text, 
function(error)
{
    if(error) throw error;

    console.log('File created and written to!');

    fs.appendFile(
    file_create_path, 
    ` ${callback_text}`, 
    function(error)
    {
        if(error) throw error;
    
        console.log('Callback => added some text!');
    });
});

// Read file (NOT SYNC...)
fs.readFile(file_create_path, 'utf8', function(error, data)
{
    if(error) throw error;

    console.log(`Read file... file data: ${data}`);
});

// Rename file (NOT SYNC...)
const new_file_name = 'HELLO WORLD!';
const old_path = file_create_path;
const new_path= path.join(old_path, new_file_name);

fs.rename(old_path, new_path, function(error, data)
{
    if(error) throw error;

    console.log(`File renamed!`);
});
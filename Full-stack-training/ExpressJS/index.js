const express = require('express');
const express_handlerbars = require('express-handlebars');
const path = require('path');
// const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

//Init Middleware
// app.use(logger);

//Handlebars Middleware
app.engine('handlebars', express_handlerbars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body Parser Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Homepage route
app.get('/', (request, response) => response.render('index', 
{
    title: 'Member App',
    members
}));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members API routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));


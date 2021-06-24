const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

// SERVER
const app = express();

//THIRD PARTY MIDDLEWARES 
app.use(logger('dev'));
app.use(cookieParser());

// CUSTOM MIDDLEWARES
app.use((req, res, next) => {
    console.log(req.cookies);
    next();
});
app.use('/about', (req, res, next) => {
    res.cookie('username', 'shishupalamigo');
    res.send('Welcome');
    next();
});

// ROUTES MIDDLEWARES
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('Server up and running on port 3k!');
});

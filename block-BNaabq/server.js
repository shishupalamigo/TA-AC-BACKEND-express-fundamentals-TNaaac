const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.use(logger('dev'));
app.use(cookieParser());

app.use('/about', (req, res, next) => {
    console.log(req.cookies);
    res.cookie('username', 'shishupalamigo');
    res.send('Welcome');
    next();
});
app.get('/', (req, res) => {
    console.log(req.cookies);
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('Server up and running on port 3k!');
});

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static(__dirname + '/public/'));

app.use(logger('dev'));
app.use(cookieParser());

app.use('/admin', (req, res, next) => {
    next('Unauthorised User');
});

app.use((req, res, next) => {
    console.log(req.cookies);
    res.cookie('Portfolio', 'Shishupal Kumar');
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/user/:username', (req, res) => {
    let username = req.params.username;
    res.send(`<h1>${username}</h1>`);
});

// Error Handling Middlewares
app.use((req, res, next) => {
    res.send('Error 404: Page Not Found')
});
app.use((err, req, res, next) => {
    res.send(err);
});

app.listen(4000, () => {
    console.log('Server up and running on port 4k!');
});
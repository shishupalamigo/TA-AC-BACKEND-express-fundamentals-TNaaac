const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

// Inbuilt Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Third Party Middlewares

app.use(logger('dev'));
app.use(cookieParser());

// Custom Middlewares
app.use('/', (req, res, next) => {
    console.log(req.cookies);
    res.cookie('cookie', 'This is a cookie, Enjoy');
    next();
});
app.use('/admin', (req, res, next) => {
    next('Unauthorised User');
}); 

// Routing Middlewares
app.get('/', (req, res) => {
    res.send(`<h2>Welcome to express</h2>`);
});

app.get('/about', (req, res) => {
    res.send('My name is qwerty');
});
app.post('/form', (req, res) => {
    res.json(req.body);
});
app.post('/json', (req, res) => {
    res.send(req.body);
});
app.get('/user/:username', (req, res) => {
    let username = req.params.username;
    res.send(`<h1>${username}</h1>`);
});

// 404 error handler 
app.use((req, res, next) => {
    res.send('Error: 404, Page Not Found')
});

// custom error
app.use((err, req, res, next) => {
    res.send(err);
});

app.listen(3000, () => {
    console.log('Server Listening on port 3k!');
});
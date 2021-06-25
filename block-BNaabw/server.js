const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.use(logger('dev'));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Welcome');
});
app.get('/users/:username', (res, req) => {
    let username = req.params.username;
    res.send(`${username}`);
});

app.listen(4000, () => {
    console.log('Server up and running on port 4!k');
});
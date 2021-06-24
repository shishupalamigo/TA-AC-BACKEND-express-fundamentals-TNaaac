const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

app.get('/admin', (req, res, next) => {
    next('Unauthorised User');
});

app.get('/', (req, res) => {
    res.send('Welcome People');
});

app.get('/about', (req,  res) =>  {
    res.send('About Page');
});
app.use((req, res) => {
    res.send('Error: 404, Page Not Found')
});
app.use((err, req, res, next) => {
    res.send(err);
});

app.listen(5000, () => {
    console.log('Server up and running on port 5k!');
});

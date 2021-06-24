const express = require('express');

const app = express();


//middleware
function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}
app.use(logger);

// routes handler
app.get('/', (req, res) => {
    res.send('Welcome to Express JS!');
});


app.listen(4000, () => {
    console.log('Server listening on port 4k!');
});
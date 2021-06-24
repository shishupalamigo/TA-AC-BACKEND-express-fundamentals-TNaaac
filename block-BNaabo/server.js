const express =  require('express');

// SERVER
const app = express();

// CUSTOM MIDDLEWARE
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// BUILT IN MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));



// ROUTES
app.get('/', (req, res) => {
    res.sendFile('./public/index.html');
});
app.post('/json', (req, res) => {
    console.log(req.body);
});
app.post('/contact', (req, res) => {
    console.log(req.body);
});

// PORT
app.listen(3000, () => {
    console.log('Server listening on port 4k!');
});
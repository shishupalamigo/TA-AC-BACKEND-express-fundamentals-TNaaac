const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded( { extended: false }));
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/new', (req, res) => {
    res.sendFile(__dirname + '/new.html');
});
app.post('/new', (req, res) => {
    res.json(req.body);
});
app.get('/users/:username', (req, res) => {
    let username = req.params.username;
    res.send(username);
});

app.listen(4000, () => {
    console.log('Server listenig on port 4k!');
});
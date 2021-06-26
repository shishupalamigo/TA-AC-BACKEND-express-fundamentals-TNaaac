const express = require('express');


const app = express();
let store = '';


app.use((req, res, next) => {
    let current = new Date();
    console.log(req.method, req.url, current);
    next();
  });


app.get('/', (req, res) => {
    res.send('Welcome');
});
app.get('/stylesheets/style.css', (req, res) => {
    res.sendFile(__dirname + '/public/stylesheets/style.css');
  });
  
  app.get('/media/cat.jpg', (req, res) => {
    res.sendFile(__dirname + '/public/media/cat.jpg');
  });

app.post('/json', (req, res) => {
    console.log('initiated');
  
    setTimeout(() => {
      console.log(req.body, 'post/json');
      res.send(req.body);
    }, 0);
    req.on('data', (chunk) => {
      store += chunk;
    });
    req.on('end', () => {
      req.body = JSON.parse(store);
      console.log(req.body, 'start');
    });
  });

app.listen(5000, () => {
    console.log('Server listening on port 5k!');
});
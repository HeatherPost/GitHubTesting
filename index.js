const express = require('express');

const app = express();

// server configuration
const PORT = 8080;

// create a route for the app
app.get('/', function (req, res) {
    res.send('Hello World')
  })

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

life.restart();
// app.js
const express = require('express');
const bodyParser = require('body-parser');

// initialize our express app
const product = require('./routes/smartphone.route'); // Imports routes for the products
const app = express();

app.use('/smartphones', product);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
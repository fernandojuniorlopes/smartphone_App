// app.js
const express = require('express');
const bodyParser = require('body-parser');

// initialize our express app
const product = require('./routes/smartphone.route'); // Imports routes for the products
const app = express();

app.use('/smartphones', product);

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://someuser:abcd1234@productstutorial-ovctk.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
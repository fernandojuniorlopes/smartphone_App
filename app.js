// app.js
const express = require('express');
const bodyParser = require('body-parser');

// initialize our express app
const smartphone = require('./routes/smartphone.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');

let dev_db_url = 'mongodb+srv://someuser:someuser@productstutorial-ovctk.mongodb.net/test?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/smartphones', smartphone);

let port = 1235;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
const express = require('express');
const router = express.Router();

const smartphone_controller = require('../controllers/smartphone.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', smartphone_controller.test);
module.exports = router;
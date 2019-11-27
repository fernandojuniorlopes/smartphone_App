const express = require('express');
const router = express.Router();

const smartphone_controller = require('../controllers/smartphone.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', smartphone_controller.test);
router.post('/create', smartphone_controller.smartphone_create);
router.get('/:id', smartphone_controller.smartphone_details);
router.put('/:id/update', smartphone_controller.smartphone_update);
router.delete('/:id/delete', smartphone_controller.smartphone_delete);
module.exports = router;
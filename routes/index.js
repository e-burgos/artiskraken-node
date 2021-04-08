const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router();

/* GET home page. */
router.get('/', indexController.home);

/* GET story page. */
router.get('/story', indexController.story);

/* GET contact page. */
router.get('/contact', indexController.contact);

module.exports = router;

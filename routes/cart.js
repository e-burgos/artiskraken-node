const express = require('express');
const cartController = require('../controllers/cartController')
const router = express.Router();
const {check,validationResult, body}= require("express-validator");

/* Post cart items. */
router.post('/', storeController.postProducts);

module.exports = router;